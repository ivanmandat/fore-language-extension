# IResourceExporter.Export

IResourceExporter.Export
-


# IResourceExporter.Export


## Синтаксис


Export;


## Описание


Метод Export осуществляет экспорт
 ресурсов.


## Комментарии


При экспорте в качестве разделителя строковых элементов ресурсов используются
 два символа «Новая строка», для разделения строк многострочного элемента
 ресурсов (например, строки компонента ListBox) используется один символ
 «Новая строка».


## Пример


Для выполнения примера предполагается наличие в репозитории ресурсов
 с идентификатором «RESOURCES». В данных ресурсах должны присутствовать
 русский и английский языки.


			Sub ExportResource;

Var

    MB: IMetabase;

    ResObj: IResourceObject;

    Consumer: DtTextConsumer;

    ExpObj: ResourceExporter;

    Countries: Array[0..1] Of String;

Begin

    MB := MetabaseClass.Active;

    ResObj := MB.ItemById("RESOURCES").Edit As IResourceObject;

    Consumer := New DtTextConsumer.Create;

    Consumer.File := "C:\Res.txt";

    Consumer.WriteHeader := True;

    ExpObj := New ResourceExporter.Create;

    ExpObj.Consumer := Consumer;

    Countries[0] := "ru";

    Countries[1] := "en";

    ExpObj.Locales := Countries;

    ExpObj.Resource := ResObj;

    ExpObj.Export;

End Sub ExportResource;


После выполнения примера все строки ресурсов, относящиеся к русскому
 и английскому языкам, будут экспортированы в файл «C:\Res.txt».


См. также:


[IResourceExporter](IResourceExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
