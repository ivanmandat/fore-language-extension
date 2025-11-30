# Cube.CreateReport

Cube.CreateReport
-


# Команда Cube.CreateReport


## Назначение


Создание регламентного отчета на основе куба.


## Особенности применения


Команда может применяться только для кубов платформы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и куба с идентификатором
 "CUBE_SEP".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("CUBE_SEP");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("Cube.CreateReport", Null);

	End Sub Button1OnClick;


При нажатии на кнопку на основе куба с идентификатором "CUBE_SEP"
 будет создан регламентный отчет.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
