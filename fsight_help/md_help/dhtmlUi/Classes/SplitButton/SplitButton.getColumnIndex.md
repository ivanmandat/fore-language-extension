# SplitButton.getColumnIndex

SplitButton.getColumnIndex
-


# SplitButton.getColumnIndex


## Синтаксис


getColumnIndex ()


## Описание


Метод getColumnIndex возвращает
 индекс столбца с пиктограммой, выбранной из [спрайта](dhtmlCommon.chm::/Classes/ImageList/ImageList.htm).


## Комментарии


Индекс столбца с пиктограммой можно задать в свойстве ColumnIndex
 из [конструктора](Constructor_SplitButton.htm).


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и визуальные
 стили PP.css. В теге BODY добавьте элемент DIV с идентификатором «splitButton».
 Предполагается наличие спрайта «GlbClsImg16.png». В теге SCRIPT добавим
 код для создания компонента [SplitButton](../../Components/SplitButton/SplitButton.htm):


    var splitButton = new PP.Ui.SplitButton({
        ImageUrl: "../PP_img/paste.png",
        Content: "Folders",
        ImageList: new PP.ImageList({ Source: "../PP_img/metabase/GlbClsImg16.png", IconWidth: 16, IconHeight: 16 }),
        ColumnIndex: 0,
        RowIndex: 0,
        ParentNode: document.getElementById("splitBut"),
        IsHorizontal: true
    });
    splitButton.setMenuDropPosition(PP.LTRB.Right);

После выполнения примера на странице будет размещен компонент SplitButton:


![](SplitButton_horizontal.gif)


Для кнопки выбрано [горизонтальное
 расположение](SplitButton.getIsHorizontal.htm): картинка и надпись расположены в одной строке. Стрелка
 [повернута вправо](SplitButton.MenuDropPosition.htm). Картинка
 кнопки выбрана из [спрайта](SplitButton.ImageList.htm).


См. также:


[SplitButton](SplitButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
