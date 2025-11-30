# IWxShape.SelectionStyle

IWxShape.SelectionStyle
-


# IWxShape.SelectionStyle


## Синтаксис


SelectionStyle: [IWxStyle](../IWxStyle/IWxStyle.htm);


## Описание


Свойство SelectionStyle определяет
 параметры оформления выделенного фрагмента текста фигуры.


## Комментарии


Стиль выделенного фрагмента текста может отличаться от стиля всего текста,
 в частности, при редактировании форматированного текста фигуры в формате
 RTF.


Для определения параметров оформления фигуры используйте [IWxShape.Style](IWxShape.Style.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором «WSP», содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    WSP: IWxWorkspace;

	    Shape: IWxShape;

	    SelStyle: IWxStyle;

	    s: Array[5] Of double;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим рабочее пространство

	    WSP := MB.ItemById("WSP").Edit As IWxWorkspace;

	    // Получим фигуру

	    Shape := WSP.Shapes.Item(0);

	    // Зададим текст фигуры

	    Shape.Text := "text";

	    // Получим параметры оформления выделенного фрагмента текста фигуры

	    SelStyle := Shape.SelectionStyle;

	    // Изменим размер шрифта

	    SelStyle.TextFontSize := 24;

	    // Сохраним изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера изменится размер шрифта заданного текста фигуры.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
