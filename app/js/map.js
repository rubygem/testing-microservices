function drawMap() {
    var paper = Raphael('map', 500, 500);

    var COUNTRY_COLOUR = 'black',
        NETWORK_COLOUR = 'red';

    var WIDTH_FACTOR = 2,
        HEIGHT_FACTOR = 2,
        SIZE_FACTOR = 2;

    function drawIreland() {
        paper
            .circle(50*WIDTH_FACTOR, 70*HEIGHT_FACTOR, 18)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":50*WIDTH_FACTOR,
                "cy":70*HEIGHT_FACTOR,
                "r" :18*SIZE_FACTOR}, 1000, "elastic");
        
        paper
            .circle(60*WIDTH_FACTOR, 55*HEIGHT_FACTOR, 12)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":60*WIDTH_FACTOR,
                "cy":55*HEIGHT_FACTOR,
                "r" :12*SIZE_FACTOR}, 1000, "elastic");
    }

    function drawBritain() {
        // wales
        paper
            .circle(95*WIDTH_FACTOR, 85*HEIGHT_FACTOR, 10)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":95*WIDTH_FACTOR,
                "cy":85*HEIGHT_FACTOR,
                "r" :10*SIZE_FACTOR}, 1000, "elastic");
        paper
            .circle(97*WIDTH_FACTOR, 75*HEIGHT_FACTOR, 8)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":97*WIDTH_FACTOR,
                "cy":75*HEIGHT_FACTOR,
                "r" :8*SIZE_FACTOR}, 1000, "elastic");
        
        // south england
        paper
            .circle(110*WIDTH_FACTOR, 100*HEIGHT_FACTOR, 10)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":110*WIDTH_FACTOR,
                "cy":100*HEIGHT_FACTOR,
                "r" :10*SIZE_FACTOR}, 1000, "elastic");
        paper
            .circle(100*WIDTH_FACTOR, 107*HEIGHT_FACTOR, 6)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":100*WIDTH_FACTOR,
                "cy":107*HEIGHT_FACTOR,
                "r" :6*SIZE_FACTOR}, 1000, "elastic");
        paper
            .circle(140*WIDTH_FACTOR, 100*HEIGHT_FACTOR, 5)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":140*WIDTH_FACTOR,
                "cy":100*HEIGHT_FACTOR,
                "r" :5*SIZE_FACTOR}, 1000, "elastic");
        paper
            .circle(138*WIDTH_FACTOR, 83*HEIGHT_FACTOR, 8)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":138*WIDTH_FACTOR,
                "cy":83*HEIGHT_FACTOR,
                "r" :8*SIZE_FACTOR}, 1000, "elastic");
        
        // north england
        paper
            .circle(120*WIDTH_FACTOR, 55*HEIGHT_FACTOR, 7)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":120*WIDTH_FACTOR,
                "cy":55*HEIGHT_FACTOR,
                "r" :7*SIZE_FACTOR}, 1000, "elastic");
        paper
            .circle(98*WIDTH_FACTOR, 27*HEIGHT_FACTOR, 10)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":98*WIDTH_FACTOR,
                "cy":27*HEIGHT_FACTOR,
                "r" :10*SIZE_FACTOR}, 1000, "elastic");
        paper
            .circle(120*WIDTH_FACTOR, 55*HEIGHT_FACTOR, 7)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":120*WIDTH_FACTOR,
                "cy":55*HEIGHT_FACTOR,
                "r" :7*SIZE_FACTOR}, 1000, "elastic");
        
        // scotland
        paper
            .circle(98*WIDTH_FACTOR, 27*HEIGHT_FACTOR, 10)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":98*WIDTH_FACTOR,
                "cy":27*HEIGHT_FACTOR,
                "r" :10*SIZE_FACTOR}, 1000, "elastic");

        paper
            .circle(100*WIDTH_FACTOR, 9*HEIGHT_FACTOR, 8)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":100*WIDTH_FACTOR,
                "cy":9*HEIGHT_FACTOR,
                "r" :8*SIZE_FACTOR}, 1000, "elastic");
        paper
            .circle(90*WIDTH_FACTOR, 9*HEIGHT_FACTOR, 6)
            .attr("stroke", COUNTRY_COLOUR)
            .animate({
                "cx":90*WIDTH_FACTOR,
                "cy":9*HEIGHT_FACTOR,
                "r" :6*SIZE_FACTOR}, 1000, "elastic");

        
    }

    function drawNetwork() {
        // main ring
        paper
            .circle(115*WIDTH_FACTOR, 75*HEIGHT_FACTOR, 18)
            .attr('fill', 'rgba(0, 0, 0, 0)')
            .attr("stroke", NETWORK_COLOUR)
            .click(function () {
                alert("You clicked on the Leeds Metro")
            })
            .animate({
                "cx":115*WIDTH_FACTOR,
                "cy":75*HEIGHT_FACTOR,
                "r" :18*SIZE_FACTOR}, 1000, "elastic");
        
        // london
        paper
            .circle(125*WIDTH_FACTOR, 90*HEIGHT_FACTOR, 12)
            .attr("stroke", NETWORK_COLOUR)
            .attr('fill', 'rgba(0, 0, 0, 0)')
            .click(function () {
                alert("You clicked on the London Metro")
            })
            .animate({
                "cx":125*WIDTH_FACTOR,
                "cy":90*HEIGHT_FACTOR,
                "r" :12*SIZE_FACTOR}, 1000, "elastic");

        // north west
        paper
            .circle(104*WIDTH_FACTOR, 45*HEIGHT_FACTOR, 15)
            .attr('fill', 'rgba(0, 0, 0, 0)')
            .attr("stroke", NETWORK_COLOUR)
            .click(function () {
                alert("You clicked on the North West Metro")
            })
            .animate({
                "cx":104*WIDTH_FACTOR,
                "cy":45*HEIGHT_FACTOR,
                "r" :15*SIZE_FACTOR}, 1000, "elastic");

        // manchester
        paper
            .circle(105*WIDTH_FACTOR, 51*HEIGHT_FACTOR, 8)
            .attr('fill', 'rgba(0, 0, 0, 0)')
            .attr("stroke", NETWORK_COLOUR)
            .click(function () {
                alert("You clicked on the Manchester Metro")
            })
            .animate({
                "cx":105*WIDTH_FACTOR,
                "cy":51*HEIGHT_FACTOR,
                "r" :8*SIZE_FACTOR}, 1000, "elastic");
    }

    setTimeout(drawIreland, 10);
    setTimeout(drawBritain, 200);
    setTimeout(drawNetwork, 500);
}