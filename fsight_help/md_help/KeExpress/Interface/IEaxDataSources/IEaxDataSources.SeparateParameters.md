# IEaxDataSources.SeparateParameters

IEaxDataSources.SeparateParameters
-


# IEaxDataSources.SeparateParameters


## Синтаксис


SeparateParameters: Boolean;


## Описание


Свойство SeparateParameters
 определяет признак создания отдельного параметра в виртуальном кубе на
 каждый параметр источника.


## Комментарии


Допустимые значения:


	- True. В виртуальном
	 кубе на каждый отдельный параметр источника также будет создаваться
	 отдельный параметр. Идентификаторы создаваемых параметров будут формироваться
	 по правилу: <ID параметра>_<ключ источника>;


	- False. По умолчанию.
	 В виртуальном кубе будут создаваться отдельные параметры, которые
	 будут управлять всеми параметрами с таким же идентификатором.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В регламентном отчёте добавлены несколько
 источников, на базе которых созданы срезы данных для аналитической области
 данных. Также источники имеют параметры с одинаковыми идентификаторами.


Добавьте ссылки на системные сборки: Express, Metabase, Report.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    Source: IEaxDataAreaSource;

	    Sources: IEaxDataSources;


	Begin

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

	    DataArea := Report.DataArea;

	    Debug.WriteLine("---Параметры до пересоздания---");

	    ShowParams(DataArea);

	    //Пересоздание параметров

	    For Each Source In DataArea.DataSources Do

	        Sources := Source.VirtualSources;

	        Sources.SeparateParameters := True;

	        Sources.RecreateVirtualCubeParams;

	    End For;

	    Debug.WriteLine("---Параметры после пересоздания---");

	    ShowParams(DataArea);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


	Sub ShowParams(DataArea: IEaxDataArea);

	Var

	    Slice: IEaxDataAreaSlice;

	    Param: IMetabaseObjectParam;

	Begin

	    For Each Slice In DataArea.Slices Do

	        Debug.WriteLine("Срез: " + Slice.Name);

	        For Each Param In Slice.Source.DataObject.Params Do

	            Debug.WriteLine("   " + Param.Id);

	        End For;

	    End For;

	End Sub ShowParams;


При выполнении примера в виртуальном кубе, который объединяет источники
 аналитической области данных, будут пересозданы параметры. Для каждого
 параметра источника будет создан отдельный параметр в виртуальном кубе.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
