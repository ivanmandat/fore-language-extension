# IWinApplication.GetObjectTarget

IWinApplication.GetObjectTarget
-


# IWinApplication.GetObjectTarget


## Синтаксис


GetObjectTarget(Object: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)): [IUiCommandTarget](../IUiCommandTarget/IUiCommandTarget.htm);


## Параметры


Object. Описание объекта репозитория, над которым необходимо произвести какое-либо действие.


## Описание


Метод GetObjectTarget создает объект, осуществляющий выполнение каких-либо действий над объектами репозитория с помощью зарезервированных команд.


## Комментарии


Список команд, доступных для объектов, представлен в описании метода [IUiCommandTarget.Execute](../IUiCommandTarget/IUiCommandTarget.Execute.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы с идентификатором «Table_1».


			Sub UserProc;

Var

    Mb: IMetabase;

    ObjDes: IMetabaseObjectDescriptor;

    Target: IUiCommandTarget;

Begin

    MB := MetabaseClass.Active;

    ObjDes := MB.ItemById("Table_1");

    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

    Target.Execute("Object.Open", Null);

End Sub UserProc;


При выполнении примера будет открыта указанная таблица репозитория.


См. также:


[IWinApplication](IWinApplication.htm) | [IUiCommandTarget](../IUiCommandTarget/IUiCommandTarget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
