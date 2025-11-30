# IDimSelection.ExternalSave

IDimSelection.ExternalSave
-


# IDimSelection.ExternalSave


## Синтаксис


ExternalSave: String;


## Описание


Метод ExternalSave сохраняет отметку
 в XML-виде в строку.


## Комментарии


Используется вместе с методом [IDimSelection.ExternalLoad](IDimSelection.ExternalLoad.htm).


## Пример


Для выполнения примера предполагается наличие формы, компонента UiDimension
 с идентификатором UiDimension1 и компонента DimensionTree с идентификатором
 DimensionTree1. В качестве источника данных для DimensionTree1 установлен
 UiDimension1. К компоненту UiDimension подключен справочник с идентификатором
 DIC_CAL_SL, находящийся в репозитории.


Добавьте ссылку на системную сборку XML.


Пример является обработчиком события «OnCreate» для формы.


			Sub IDIMSELECTION_SELECTLEVEL_OnCreate(Sender: Object; Args: IEventArgs);

Var

    XMLS: string;

    XML: FreeThreadedDOMDocument60;

Begin

    // Добавляем в отметку все элементы справочника

    DimensionTree1.Selection.SelectAll;

    // Сохраняем отметку в XML-виде в строку

    XMLS := DimensionTree1.Selection.ExternalSave;

    // Сохраняем отметку в файл формата XML

    XML := New FreeThreadedDOMDocument60.Create;

    XML.loadXML(XMLS);

    XML.save("c:\File.xml");

End Sub IDIMSELECTION_SELECTLEVEL_OnCreate;


В результате выполнения примера отметка будет сохранена в файл «c:\File.xml».


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
