# EditDictionary

EditDictionary
-


# Команда EditDictionary


## Назначение


Открытие справочника НСИ на редактирование.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm)
		 Справочник НСИ (составной справочник НСИ), который необходимо
		 открыть на редактирование.


## Особенности применения


Команда может применяться только для справочников НСИ (составных и табличных
 справочников НСИ).


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 репозиторий НСИ с идентификатором "NSI_1", в данном репозитории
 имеется справочник "Dict_1".


Добавьте ссылки на системные сборки: Forms, Metabase, Rds, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    NSI: IRdsDictionary;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    NSI := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    Target := WinApplication.Instance.GetPluginTarget("Rds");

	    Context := Target.CreateExecutionContext;

	    Context.Data := NSI;

	    Target.Execute("EditDictionary", Context);

	End Sub Button1OnClick;


При нажатии на кнопку справочник НСИ "Dict_1" будет открыт
 на редактирование.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
