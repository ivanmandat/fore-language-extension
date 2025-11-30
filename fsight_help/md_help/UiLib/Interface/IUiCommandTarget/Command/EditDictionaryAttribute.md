# EditDictionaryAttribute

EditDictionaryAttribute
-


# Команда EditDictionaryAttribute


## Назначение


Открытие диалога редактирования параметров атрибута справочника НСИ.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IRdsAttribute](KeRds.chm::/Interface/IRdsAttribute/IRdsAttribute.htm)
		 Атрибут справочника, который необходимо открыть на редактирование.


## Особенности применения


Команда может применяться только для атрибутов справочников НСИ (составных
 или табличных справочников НСИ). Результатом выполнения метода [Execute](../IUiCommandTarget.Execute.htm)
 будет значение True, если в диалоге
 была нажата кнопка «ОК» и False,
 если в диалоге была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 репозиторий НСИ с идентификатором "NSI_1", в данном репозитории
 имеется справочник "Dict_1". В структуре справочника имеется
 атрибут с идентификатором «COUNTRY_ID».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Dictionary: IRdsDictionary;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    bOK: Boolean;

Begin

    MB := MetabaseClass.Active;

    Dictionary := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit As IRdsDictionary;

    Target := WinApplication.Instance.GetPluginTarget("Rds");

    Context := Target.CreateExecutionContext;

    Context.Data := Dictionary.Attributes.FindById("COUNTRY_ID");

    bOK := Target.Execute("EditDictionaryAttribute", Context);

    If bOK Then

        (Dictionary As IMetabaseObject).Save;

    End If;

    text := bOK.ToString;

End Sub Button1OnClick;


При нажатии на кнопку будет открыт диалог редактирования параметров
 указанного атрибута справочника НСИ. Если в диалоге были изменены какие-либо
 параметры и нажата кнопка «ОК», то все изменения будут сохранены.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
