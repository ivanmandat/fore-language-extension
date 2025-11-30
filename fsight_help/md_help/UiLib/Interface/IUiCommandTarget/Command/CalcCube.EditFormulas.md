# CalcCube.EditFormulas

CalcCube.EditFormulas
-


# Команда CalcCube.EditFormulas


## Назначение


Вызов стандартного диалога редактирования формул.


## Особенности применения


Команда может применяться только для вычисляемых кубов, либо многомерного
 расчета на сервере БД.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и вычисляемого куба с идентификатором
 CALC_CUBE.


Добавьте ссылки на системные сборки: Forms, Metabase, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("CALC_CUBE");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("CalcCube.EditFormulas", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт редактор формул для вычисляемого
 куба с идентификатором CALC_CUBE.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
