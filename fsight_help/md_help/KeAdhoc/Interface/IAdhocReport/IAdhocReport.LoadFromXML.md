# IAdhocReport.LoadFromXML

IAdhocReport.LoadFromXML
-


# IAdhocReport.LoadFromXML


## Синтаксис


LoadFromXML(Src: Variant);


## Параметры


Src. Путь
 и наименование XML-файла, содержащего настройки аналитической панели.


## Описание


Метод LoadFromXML осуществляет
 загрузку настроек аналитической панели из указанного XML-файл.


## Комментарии


Данный метод позволяет загрузить настройки, сохраненные в результате
 работы метод [SaveToXML](IAdhocReport.SaveToXML.htm).


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 «С» файла «Report.xml», содержащего настройки аналитической панели.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    AdhocReport: IAdhocReport;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_ADHOC_REPORT;

    CrInfo.Id := "NewAdhocReport";

    CrInfo.Name := "Новая аналитическая панель";

    CrInfo.Parent := MB.Root;

    AdhocReport := MB.CreateObject(CrInfo).Edit As IAdhocReport;

    AdhocReport.LoadFromXML("c:\Report.xml");

    (AdhocReport As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый объект: «Аналитическая панель».
 Параметры панели будут загружены из файла «Report.xml».


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
