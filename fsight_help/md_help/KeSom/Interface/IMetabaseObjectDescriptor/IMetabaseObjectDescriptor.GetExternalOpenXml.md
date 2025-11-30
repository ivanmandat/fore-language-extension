# IMetabaseObjectDescriptor.GetExternalOpenXml

IMetabaseObjectDescriptor.GetExternalOpenXml
-


# IMetabaseObjectDescriptor.GetExternalOpenXml


## Синтаксис


GetExternalOpenXml([Options: Integer = 0]): Object;


## Параметры


Options. Параметр зарезервирован
 на будущее.


## Описание


Метод GetExternalOpenXml генерирует
 XML-структуру, содержащую параметры открытия объекта.


## Комментарии


Полученная XML-структура может быть сохранена в файл с расширением *.PP
 и использована для автоматического открытия объекта при запуске «Форсайт. Аналитическая платформа».


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором Report_1.


Добавьте ссылки на системные сборки: IO, Metabase, Xml.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    TxtWriter: ITextWriter;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Report_1");

	    TxtWriter := File.OpenTextWriter("C:\" + MDesc.Id + ".PP", True);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteString((MDesc.GetExternalOpenXml As IXmlDomElement).xml);

	    TxtWriter.Flush;

	End Sub UserProc;


При выполнении примера будет сгенерирована и сохранена в файл XML-структура,
 содержащая параметры автоматического открытия указанного объекта.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
