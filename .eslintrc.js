module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": "airbnb",
	"rules": {
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"react/prop-types": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"no-console": 0,
		"eol-last": 0,
		"no-tabs": 0,
		"react/jsx-filename-extension": 0,
		"arrow-body-style": 0,
		"max-len": false,
	}
}