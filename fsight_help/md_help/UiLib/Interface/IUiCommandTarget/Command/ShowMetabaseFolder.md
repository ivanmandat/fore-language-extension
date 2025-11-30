# ShowMetabaseFolder

ShowMetabaseFolder
-


# Команда ShowMetabaseFolder


## Назначение


Перевод фокуса в навигатор объектов и отображение содержимого указанного
 объекта-контейнера.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Описание объекта-контейнера, содержимое которого необходимо
		 отобразить в навигаторе объектов.


## Особенности применения


Команда может применяться только для объектов-контейнеров. Если в свойстве
 [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 передается описание объекта не являющегося контейнером, то происходит
 переход в навигатор объектов без смены отображаемого объекта. К объектам-контейнерам
 относятся следующие объекты: Папка, Репозиторий НСИ, База данных временных
 рядов, Контейнер моделирования, Сборка, объекты пользовательских классов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и папки в репозитории с
 идентификатором «F_WORK».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("F_WORK");

    Target := WinApplication.Instance.GetPluginTarget("Std");

    Context := Target.CreateExecutionContext;

    Context.Data := MDesc;

    Target.Execute("ShowMetabaseFolder", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет осуществлен переход в навигатор объектов,
 в навигаторе будет отображено содержимое указанной папки.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
