# ShowObjectAccess

ShowObjectAccess
-


# Команда ShowObjectAccess


## Назначение


Вызов стандартного диалога настройки параметров управления доступом
 к объекту репозитория.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Описание объекта репозитория, для которого необходимо вызвать
		 диалог настройки параметров управления доступом.


## Особенности применения


Отсутствуют


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и объекта репозитория с
 идентификатором "Obj_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Fld");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MB.ItemById("Obj_1");

	    Target.Execute("ShowObjectAccess", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведено окно параметров управления доступом
 к объекту репозитория "Obj_1".


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
