# IEaxAnalyzeCore.CreateMultiOlap

IEaxAnalyzeCore.CreateMultiOlap
-


# IEaxAnalyzeCore.CreateMultiOlap


## Синтаксис


CreateMultiOlap(DataSource: [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm));


## Параметры


DataSource. Источник данных,
 на основе которого создается экспресс-отчет.


## Описание


Метод CreateMultiOlap создает
 экспресс-отчет, содержащий несколько источников данных.


## Комментарии


Если DataSource является виртуальным
 кубом, то после вызова CreateMultiOlap
 будет заполнена коллекция источников данных отчета. Виртуальный куб, на
 котором основывается экспресс-отчет, должен быть непостоянным объектом
 репозитория. Признак постоянного объекта репозитория возвращает свойство
 [IMetabaseObjectDescriptor.IsPermanent](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsPermanent.htm).


Если DataSource не является
 виртуальным кубом, то будет создаваться обычный экспресс-отчет на одном
 источнике данных с пустой коллекцией IEaxDataAreaSource.VirtualSources.


## Пример


Для выполнения примера в репозитории предполагается наличие баз данных
 временных рядов с идентификаторами FC_FIRST и FC_SECOND.


Добавьте ссылки на системные сборки: Cubes, Express, Matrix, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Ci: IMetabaseObjectCreateInfo;

	    VirtCube: IVirtualCube;

	    SourceInst, VirtCubeInst: ICubeInstance;

	    DataSource: IMatrixDataSource;

	    Eax: IEaxAnalyzer;

	    Dest: ICubeInstanceDestination;

	Begin

	    Mb := MetabaseClass.Active;

	    Ci := Mb.CreateCreateInfo;

	    Ci.Permanent := False;

	    // Создаем новый ЭО

	    Ci.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    Eax := Mb.CreateObject(Ci).Edit As IEaxAnalyzer;

	    // Создаем виртуальный куб

	    Ci.ClassId := MetabaseObjectClass.KE_CLASS_VIRTUALCUBE;

	    VirtCube := Mb.CreateObject(Ci).Edit As IVirtualCube;

	    // Добавляем в виртуальный куб 1-ю базу данных временных рядов

	    SourceInst := Mb.ItemById("FC_FIRST").Open(Null) As ICubeInstance;

	    Dest := SourceInst.Destinations.DefaultDestination;

	    Debug.WriteLine(Dest.Name);

	    VirtCube.Sources.Add(Dest.DestinationModel);

	    // Добавляем в виртуальный куб 2-ю базу данных временных рядов

	    SourceInst := Mb.ItemById("FC_SECOND").Open(Null) As ICubeInstance;

	    Dest := SourceInst.Destinations.DefaultDestination;

	    Debug.WriteLine(Dest.Name);

	    VirtCube.Sources.Add(Dest.DestinationModel);

	    // Создаем ЭО на готовом виртуальном кубе

	    VirtCubeInst := (VirtCube As IMetabaseObjectDescriptor).Open(Null) As ICubeInstance;

	    DataSource := VirtCubeInst.Destinations.DefaultDestination As IMatrixDataSource;

	    Eax.CreateMultiOlap(DataSource);

	    // Сохраняем ЭО

	    (Eax As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет создан экспресс-отчет, источником данных
 которого является непостоянный виртуальный куб. Виртуальный куб создан
 на основе двух баз данных временных рядов.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
