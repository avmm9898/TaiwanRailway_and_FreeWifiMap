var b04611002 = function(){    
    
    dataUrl="https://avmm9898.github.io/D3-goodman/tides.csv"
    var width = 640;
    var height = 480;
    var ctrl = d3.select(".content").append("svg").attr("width", width).attr("height", height);
    d3.csv(dataUrl, 
	    function(data)
	    {
		    var ln = data.length;
		    console.log(data);
		    var maxy = d3.max(data, function(d){ return d.h;});      
		    var lines = d3.line()
                        .x(function(d,i){return i*width/ln;})
                        .y(function(d){return height-d.h*(height/maxy)});
		    
            ctrl.append("path")
            .data([data])
            .attr("d", lines)
            .attr("stroke", "blue")
            .attr("fill", "none");
	    }
    );
}