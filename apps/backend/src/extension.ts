// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { join, sep } from "path";
import { readFileSync } from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "remix-wizard" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('remix-wizard.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Remix Wizard!');
	});

	// Add a command to create a Webview Panel to try it out
	const dispoablePanel = vscode.commands.registerCommand('remix-wizard.setup', () => {
		const mediaPath = join(context.extensionPath, "dist", "media");
		const htmlFileName = "index.html";
		let indexHtml = readFileSync(join(mediaPath, htmlFileName), "utf8");
		const panel = vscode.window.createWebviewPanel(
			'remix-wizard',
			'Remix Setup Wizard',
			vscode.ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true,
				localResourceRoots: [vscode.Uri.file(mediaPath)],
			}
		);
		panel.webview.onDidReceiveMessage(
			message => {
				const terminal = vscode.window.createTerminal("remix-wizard");
				switch (message.command) {
					case 'create':
						const options = JSON.parse(message.text);
						terminal.show();
						terminal.sendText(`npx --yes create-remix@${options.remixVersion} ${options.dir} --template ${options.appTemplate}${options.language === "typescript" ? " --typescript" : ""} ${options.install === true ? "--install" : "--no-install"} && exit
						`);
						panel.dispose();
						return;
				}
			},
			undefined,
			context.subscriptions
		);
		vscode.window.onDidCloseTerminal(t => {
			if (t.name === "remix-wizard" && t.exitStatus?.code === 0 && t.exitStatus?.reason === 2) {
				vscode.window.showInformationMessage(`Successfully created Remix app!`);
			}
		});

		// Convert the src attribute of the script tag in index.html to a webview URI
		const scriptPathOnDisk = vscode.Uri.file(join(mediaPath, sep));
		const scriptUri = panel.webview.asWebviewUri(scriptPathOnDisk);
		indexHtml = indexHtml
			.replace(
				/<script type="module" crossorigin src="\/assets\//g,
				`<script type="module" crossorigin src="${scriptUri.toString()}assets/`
			)
			.replace(
				/<link rel="stylesheet" href="\/assets\//g,
				`<link rel="stylesheet" href="${scriptUri.toString()}assets/`
			);
		panel.webview.html = indexHtml;
	});

	context.subscriptions.push(
		disposable,
		dispoablePanel,
	);
}

// This method is called when your extension is deactivated
export function deactivate() { }
