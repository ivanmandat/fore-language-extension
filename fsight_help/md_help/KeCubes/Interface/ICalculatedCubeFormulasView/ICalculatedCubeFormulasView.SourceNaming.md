# ICalculatedCubeFormulasView.SourceNaming

ICalculatedCubeFormulasView.SourceNaming
-


# ICalculatedCubeFormulasView.SourceNaming


## Синтаксис


SourceNaming: [CubeFormulasViewSourceNaming](../../Enums/CubeFormulasViewSourceNaming.htm);


## Описание


Свойство SourceNaming определяет
 формат обозначения источника данных в наименованиях элементов в формулах
 вычисляемого куба.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором CalcCube.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICalculatedCubeInstance;

	    View: ICalculatedCubeFormulasView;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("CalcCube").Open(Null) As ICalculatedCubeInstance;

	    View := CubeInst.View(CubeInst.Sources.Item(0));

	    View.SourceNaming := CubeFormulasViewSourceNaming.Name;

	    CubeInst.SaveFormulas;

	End Sub UserProc;


При выполнении примера будет установлен формат обозначения первого источника
 данных в наименованиях элементов. Перед наименованиями элементов будет
 отображаться наименование источника данных.


См. также:


[ICalculatedCubeFormulasView](ICalculatedCubeFormulasView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
