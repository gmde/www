var ViewModelManFactors = new Class(
    {
        Extends: Ajax,
        Implements: [IArrowList, IDic],
        initialize: function()
        {
            this.parent(GameItems.ManFactors);
            this.initArrowList(9);

            this.dicFactors = null;

            this.desc = "Факторы";
        },
        getHandler: function(answer, next)
        {
            var result = this.joinTo(answer, this.dicFactors);
            this.items(result);
            Game.PlayerPublic.factors(result);
            this.parent(answer, next);
        }
    });
/*
<!-- ko foreach: data -->
<div class="tooltip background-color-white radius-low opacity-high"
data-bind="visible: hovered, style: { left: tooltipX , top: tooltipY }">

    <div class="tooltip-header background-gradient-bright-2 radius-low center" data-bind="text: name"></div>

Уровень: <span data-bind="text: level"></span><br/>
Усталость: <span data-bind="text: frazzle"></span><br/>

    <!-- ko if: trauma > 0 -->
Травма: <span data-bind="text: trauma"></span><br/>
    <!-- /ko -->

</div>
<!-- /ko -->

<img src="../images/pic/transparent.png" usemap="#navigation" border="0" class="transparent" style="z-index: 150;">
    <map name="navigation" data-bind="foreach: view.maps">
        <area data-bind="attr: { coords: map }, event: { mouseover: function() { $parent.mouseOver($data.id); }, mouseout: function() { $parent.mouseOut($data.id); }, mousemove: function() { $parent.mouseMove(event); } }"
        shape="poly"
        href="javascript:;">
        </map>
    */