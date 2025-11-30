# Button.MenuArrowPosition

Button.MenuArrowPosition
-


# Button.MenuArrowPosition


## Синтаксис


MenuArrowPosition: PP.[LTRB](dhtmlCommon.chm::/enums/ltrb.htm);


## Описание


Свойство MenuArrowPosition устанавливает
 позицию стрелки дочернего меню компонента.


## Комментарии


Значения свойства - элементы перечисления [LTRB](dhtmlCommon.chm::/enums/ltrb.htm).
 По умолчанию установлено значение Bottom.


Если создается кнопка с изображением и с раскрывающимся меню, значение
 свойства [ImagePosition](Button.ImagePosition.htm)
 перекрывает значение свойства MenuArrowPosition.


## Пример


Для выполнения примера в теге <head> html-страницы добавьте ссылки
 на библиотеку PP.js и визуальные стили PP.css. Добавим на страницу кнопку
 с изображением и раскрывающимся меню:


<script type="text/javascript">
    var menu = new PP.Ui.Menu();
    menu.addItem("<b>First</b>");
    menu.addItem(new PP.Ui.Separator());
    menu.addItem("<b>Second</b>");
    var b1 = new PP.Ui.Button({
        ImageUrl: "../build7.1/img/illustrations.png",
        ImagePosition: PP.LTRB.Left,
        Content: "Button",
        Menu: menu,
        MenuArrowPosition: PP.LTRB.Right,
        MenuDropPosition: PP.LTRB.Right,
        ParentNode: document.getElementById("example")
    });
</script>
После выполнения примера на странице будет размещена кнопка с текстом
 «Button», с изображением и раскрывающимся меню:


![](dropMenuButton.gif)


См. также:


[Button](Button.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
