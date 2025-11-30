# IMetabaseObject.GetXml

IMetabaseObject.GetXml
-


# IMetabaseObject.GetXml


## Синтаксис


		GetXml: Variant;


## Описание


Метод GetXml возвращает внутреннее
 представление объекта репозитория в XML-виде.


## Комментарии


Данный метод возвращает то представление объектов, в котором они хранятся
 в системных таблицах репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj1».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    xml: IXmlDomDocument;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("Obj1").Bind;

		    xml := MObj.GetXml As IXmlDomDocument;

		    Debug.WriteLine(xml.xml);

		End Sub UserProc;


После выполнения примера XML-представление объекта будет выведено в
 консоль среды разработки.


См. также:


[IMetabaseObject](IMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
