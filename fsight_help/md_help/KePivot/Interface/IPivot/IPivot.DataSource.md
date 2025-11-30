# IPivot.DataSource

IPivot.DataSource
-


# IPivot.DataSource


## Синтаксис


DataSource: [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm);


## Описание


Свойство DataSource определяет
 источник данных, на основе которого формируется таблица.


## Комментарии


При работе с объектом, лежащим в основе таблицы экспресс-отчёта, в данном
 свойстве можно определить источник данных экспресс-отчёта.


Если экспресс-отчёт построен на нескольких источниках данных, то доступ
 к ним осуществляется посредством свойства [IEaxDataAreaSource.VirtualSources](KeExpress.chm::/Interface/IEaxDataAreaSource/IEaxDataAreaSource.VirtualSources.htm).
 Свойство IPivot.DataSource вернёт
 в этом случае [экземпляр
 варианта отображения](KeCubes.chm::/Interface/ICubeInstanceDestination/ICubeInstanceDestination.htm) виртуального куба, который объединит
 источники данных экспресс-отчёта. Данный виртуальный куб будет является
 скрытым дочерним объектом экспресс-отчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT. Данный экспресс-отчёт построен на одном
 источнике данных. Также в репозитории имеется куб с идентификатором Cube_2.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Expr: IEaxAnalyzer;

    CubeInst: ICubeInstance;

    CubeDest: ICubeInstanceDestination;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

    CubeInst := MB.ItemById("Cube_2").Open(Null) As ICubeInstance;

    CubeDest := CubeInst.Destinations.DefaultDestination;

    Expr := MObj As IEaxAnalyzer;

    Expr.Pivot.DataSource := CubeDest As IMatrixDataSource;

    MObj.Save;

End Sub UserProc;


При выполнения примера в экспресс-отчёте будет изменен источник данных.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
