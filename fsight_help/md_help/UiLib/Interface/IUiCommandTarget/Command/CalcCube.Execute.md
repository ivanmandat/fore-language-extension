# CalcCube.Execute

CalcCube.Execute
-


# Команда CalcCube.Execute


## Назначение


Вызов стандартного диалога запуска многомерного расчета на сервере БД.


## Особенности применения


Команда может применяться только для многомерного расчета на сервере
 БД.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и многомерного расчета на сервере
 БД с идентификатором MDCalc.


Добавьте ссылки на системные сборки: Forms, Metabase, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("MDCalc");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("CalcCube.Execute", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыто окно указания параметров и запуска
 многомерного расчета на сервере БД.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
