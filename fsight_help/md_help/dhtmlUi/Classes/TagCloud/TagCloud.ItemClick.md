# TagCloud.ItemClick

TagCloud.ItemClick
-


# TagCloud.ItemClick


## Синтаксис


ItemClick: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ItemClick наступает
 после нажатия кнопки мыши по активной метке облака.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TagCloud](../../Components/TagCloud/TagCloud.htm) c наименованием
 «tagCloud» (см. «[Пример
 создания компонента TagCloud](../../Components/TagCloud/Example_TagCloud.htm)»). Пример нужно разместить в теге <script>.
 Добавим обработчик события нажатия на метку облака:


// Добавляем обработчик события нажатия на метку облака
tagCloud.ItemClick.add(function(sender, args) {
    console.log("Произошло нажатие на метку облака");
});
tagCloud.getDomNode().onclick = function (sender, args) {
    if (tagCloud._HoverItem != undefined) {
        tagCloud.ItemClick.fire(tagCloud._HoverItem, {});
    }
});
После нажатия на элемент в консоль будет выведено сообщение о нажатии
 на метку:


Произошло нажатие на метку облака


См. также:


[TagCloud](TagCloud.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
