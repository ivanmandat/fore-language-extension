# IDimensionViewer.AttributeSeparator

IDimensionViewer.AttributeSeparator
-


# IDimensionViewer.AttributeSeparator


## Синтаксис


AttributeSeparator: Char;


## Описание


Свойство AttributeSeparator
 определяет символ-разделитель между наименованиями атрибутов.


## Комментарии


Свойство актуально, если свойство [IDimensionViewer.MultipleAttributes](IDimensionViewer.MultipleAttributes.htm)
 принимает значение True.


## Пример


Для выполнения примера в репозитории необходимо наличие формы, содержащей
 компоненты:


	- DimensionTree с идентификатором
	 «DimensionTree1»;


	- UiDimension с идентификатором
	 «UiDimension1», являющийся источником данных для «DimensionTree1»;


Также необходимо наличие табличного справочника, который является источником
 данных для «UiDimension1». Справочник не содержит скрытых атрибутов.


	Sub UserProc;

	Begin

	    // Зададим возможность отображения нескольких атрибутов справочника

	    DimensionTree1.MultipleAttributes := True;

	    // Изменим вид разделителя

	    DimensionTree1.AttributeSeparator := '\';

	End Sub UserProc;


После выполнения примера станет возможным отображение нескольких атрибутов
 справочника и сменится разделитель.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
