# ShowAdditionalAttributesDialog

ShowAdditionalAttributesDialog
-


# Команда ShowAdditionalAttributesDialog


## Назначение


Открытие диалога для [задания
 значений дополнительных атрибутов](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/AdditionalAttributes.htm).


## Параметры использования


Параметры команды передаются в свойстве [IUiCommandExecutionContext.Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве укажите значения:


		 Тип значения
		 Описание


		 Элемент 1: [IMsModel](KeMs.chm::/Interface/IMsModel/IMsModel.htm)
		 Стандартная модель.


		 Элемент 2: [IRubricator](KeCubes.chm::/Interface/IRubricator/IRubricator.htm)
		 База данных временных рядов.


## Особенности применения


Открытие диалога «[Значения
 атрибутов](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/AdditionalAttributes.htm)»
 доступно для стандартных моделей, если источником данных моделируемой
 переменной является база данных временных рядов.


## Пример


Для выполнения примера предполагается наличие формы, содержащей кнопку
 с идентификатором Button1.


В репозитории предполагается наличие контейнера моделирования с идентификатором
 MS_PLUGIN, содержащего стандартную модель с идентификатором DIMITERATOR.
 Источником данных моделируемой переменной является база данных временных
 рядов с идентификатором TSDB.


Добавьте ссылки на системные сборки: Cubes, Fore, Metabase, Ms, UI.


Пример является обработчиком события OnClick для кнопки Button1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    MsKey: Integer;

    Model: IMsModel;

    Rubricator: IRubricator;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Arg: array Of Variant;

Begin

    // Получаем текущий репозиторий

    Mb := MetabaseClass.Active;

    // Получаем модель

    MsKey := Mb.GetObjectKeyById("MS_PLUGIN");

    Model := Mb.ItemByIdNamespace("DIMITERATOR", MsKey).Edit As IMsModel;

    // Получаем базу данных временных рядов

    Rubricator := Mb.ItemById("TSDB").Edit As IRubricator;

    // Получаем плагин Ms

    Target := WinApplication.Instance.GetPluginTarget("Ms");

    // Создаём контекст для выполнения команды

    Context := Target.CreateExecutionContext;

    // Создаём массив параметров команды

    Arg := New Variant[2];

    Arg[0] := Rubricator;

    Arg[1] := Model;

    // Передаём массив параметров команды

    Context.Data := Arg;

    // Выполняем команду

    Target.Execute("ShowAdditionalAttributesDialog", Context);

End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку Button1 отобразится
 диалог для задания значений дополнительных атрибутов.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
