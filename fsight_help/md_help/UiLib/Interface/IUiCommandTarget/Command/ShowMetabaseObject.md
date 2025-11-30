# ShowMetabaseObject

ShowMetabaseObject
-


# Команда ShowMetabaseObject


## Назначение


Перевод фокуса в навигатор объектов и отображение указанного объекта
 репозитория.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Описание объекта, который необходимо отобразить в навигаторе
		 объектов.


## Особенности применения


Отсутствуют.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и объекта с идентификатором
 «Document».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("Document");

    Target := WinApplication.Instance.GetPluginTarget("Std");

    Context := Target.CreateExecutionContext;

    Context.Data := MDesc;

    Target.Execute("ShowMetabaseObject", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет осуществлен переход в навигатор объектов,
 в навигаторе будет отображен указанный объект.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
