# IExportRequestParams.FiltersSelectionSet

IExportRequestParams.FiltersSelectionSet
-


# IExportRequestParams.FiltersSelectionSet


## Синтаксис


FiltersSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство FiltersSelectionSet
 определяет отметку справочников, в соответствии с которой осуществляется
 фильтрация показателей в объекте экспорта.


## Комментарии


Если в базе данных временных рядов есть атрибуты, ссылающиеся на справочники
 репозитория, то по элементам этих справочников можно настроить фильтрацию
 показателей при экспорте. Для этого включите отметку справочника в коллекцию
 свойства FiltersSelectionSet.
 Экспортироваться будут только те показатели, которые связаны с отмеченными
 элементами справочников.


После получения и формирования отметки справочников необходимо переприсвоить
 значение свойства FiltersSelectionSet.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «TSDB». В базе создан объект экспорта
 с идентификатором «EXPORT_TS». В структуре базы создан обязательный атрибут
 рядов с идентификатором «COUNTRY». Данный атрибут ссылается на какой-либо
 справочник репозитория.


			Sub UserProc;

Var

    MB: IMetabase;

    Exporter: IExportRequestDefinition;

    ExportParams: IExportRequestParams;

    Filter: IDimSelectionSet;

    RubAttribute: IMetaAttribute;

    DictSelection: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    Exporter := MB.ItemByIdNamespace("EXPORT_TS", MB.GetObjectKeyById("TSDB")).Edit As IExportRequestDefinition;

    ExportParams := Exporter.Exporter;

    Filter := ExportParams.FiltersSelectionSet;

    // Атрибут, по которому будут отфильтрованы показатели

    RubAttribute := ExportParams.Rubricator.Facts.Attributes.FindById("COUNTRY");

    // Открываем справочник, с которым связан атрибут и добавляем его в отметку

    DictSelection := Filter.Add(RubAttribute.ValuesObject.Open(Null) As IDimInstance);

    // Отмечаем только первый элемент

    DictSelection.SelectElement(0, False);

    ExportParams.FiltersSelectionSet := Null;

    (Exporter As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будут изменены параметры фильтрации показателей
 в объекте экспорта. Экспорт будет производиться только по первой стране,
 созданной в справочнике, с которым связан атрибут «COUNTRY».


См. также:


[IExportRequestParams](IExportRequestParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
