# IDimSelection.ExternalLoad

IDimSelection.ExternalLoad
-


# IDimSelection.ExternalLoad


## Синтаксис


ExternalLoad(Source: String);


## Параметры


Source. Строка, в которой сохранена
 отметка в XML-виде.


## Описание


Метод ExternalLoad загружает
 отметку в XML-виде из строки.


## Комментарии


Используется вместе с методом [IDimSelection.ExternalSave](IDimSelection.ExternalSave.htm).


## Пример


Для выполнения примера предполагается наличие формы, компонента UiDimension
 с идентификатором UiDimension1 и компонента DimensionTree с идентификатором
 DimensionTree1. В качестве источника данных для DimensionTree1 установлен
 UiDimension1. К компоненту UiDimension
 подключен справочник с идентификатором DIC_CAL_SL, находящийся
 в репозитории. В файловой системе предполагается наличие файла «c:\File.xml»,
 содержащего отметку в XML-виде.


Добавьте ссылку на системную сборку XML.


Пример является обработчиком события «OnCreate» для формы.


			Sub IDIMSELECTION_SELECTLEVEL_OnCreate(Sender: Object; Args: IEventArgs);

Var

    XMLS: string;

    XML: FreeThreadedDOMDocument60;

Begin

    // Получаем отметку из файла формата XML

    XML := New FreeThreadedDOMDocument60.Create;

    XML.load("c:\File.xml");

    XMLS := XML.xml;

    DimensionTree1.Selection.DeselectAll;

    // Загружаем отметку в XML-виде из строки

    DimensionTree1.Selection.ExternalLoad(XMLS);

End Sub IDIMSELECTION_SELECTLEVEL_OnCreate;


В результате выполнения примера отметка будет загружена из файла «c:\File.xml».


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
