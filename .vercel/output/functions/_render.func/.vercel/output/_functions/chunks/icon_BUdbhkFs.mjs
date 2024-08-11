const icon = new Proxy({"src":"/_astro/icon.DbrkvlxM.png","width":2509,"height":385,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/images/icon.png";
							}
							
							return target[name];
						}
					});

export { icon as i };
