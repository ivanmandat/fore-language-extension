# IAdoMdCubeInstance.CubeInstance

IAdoMdCubeInstance.CubeInstance
-


# IAdoMdCubeInstance.CubeInstance


## Синтаксис


CubeInstance: [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm);


## Описание


Свойство CubeInstance возвращает
 экземпляр куба, описываемый интерфейсом [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В каталоге имеется куб ADOMD с идентификатором
 «Cube_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IAdoMdCubeInstance;

    CrInfo: IMetabaseObjectCreateInfo;

    Expr: IEaxAnalyzer;

Begin

    MB := MetabaseClass.Active;

    //Открытие куба

    Cube := MB.ItemByIdNamespace("Cube_1", MB.GetObjectKeyById("ADOMDTest")).Open(Null) As IAdoMdCubeInstance;

    //Информация для создания экспресс-отчета

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

    CrInfo.Id := MB.GenerateId("ADOMDReport");

    CrInfo.Parent := MB.Root;

    //Создание экспресс-отчета на базе куба ADOMD

    Expr := MB.CreateObject(CrInfo).Edit As IEaxAnalyzer;

    Expr.OpenCube(Cube.CubeInstance);

    (Expr As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера на базе экземпляра куба ADOMD будет создан экспресс-отчет.


См. также:


[IAdoMdCubeInstance](IAdoMdCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
