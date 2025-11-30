# SelectionSchemasDialog

SelectionSchemasDialog
-


# Команда SelectionSchemasDialog


## Назначение


Открытие диалога настройки схем отметки справочника.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Описание справочника репозитория.


## Особенности применения


Команда может применяться только для справочников репозитория. Результатом
 выполнения команды будет логическое значение, указывающее какая кнопка
 была нажата в диалоге: True, если
 была нажата кнопка «ОК» и False,
 если была нажата кнопка «Отмена». При нажатии на кнопку «ОК» все внесенные
 изменения будут сохранены.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории имеется справочник
 с идентификатором «Std_Dim».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Dim: IMetabaseObjectDescriptor;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemById("STD_DIM");

    Target := WinApplication.Instance.GetPluginTarget("Dim");

    Context := Target.CreateExecutionContext;

    Context.Data := Dim;

    Target.Execute("SelectionSchemasDialog", Context);

End Sub Button1OnClick;


При нажатии на кнопку для указанного справочника будет выведен диалог
 настройки схем отметки.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
