walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bnode.js\b/g, "node.js™");
	v = v.replace(/\bNode.js\b/g, "Node.js™");
	v = v.replace(/\bnodejs\b/g, "nodejs™");
	v = v.replace(/\bNodejs\b/g, "nodejs™");
	
	textNode.nodeValue = v;
}


