# IMetabaseObjectParam.SharedParamLink

IMetabaseObjectParam.SharedParamLink
-


# IMetabaseObjectParam.SharedParamLink


## Синтаксис


SharedParamLink: [IMetabaseObjectParamLink](../IMetabaseObjectParamLink/IMetabaseObjectParamLink.htm);


## Описание


Свойство SharedParamLink возвращает
 настройки связи параметра с глобальной переменной.


## Комментарии


Если для параметра заданы настройки связи, то при инициализации параметру
 будет установлено значение из глобальной переменной. В дальнейшем значение
 параметра можно менять.


Если для параметра установлен [режим
 с возможностью изменения значения](../IMetabaseObjectParamLink/IMetabaseObjectParamLink.ReadWriteMode.htm), то после изменения параметра новое
 значение будет передано в глобальную переменную. Изменённое значение глобальной
 переменной хранится в кеше в рамках текущей сессии и будет сброшено после
 завершения работы в репозитории.


При работе с формами ввода необходимо учитывать следующую особенность:
 параметры, описываемые интерфейсом [IDefParameter](DataEntryFormsCore.chm::/Interface/IDefParameter/IDefParameter.htm),
 не поддерживает прямую настройку связи с глобальными переменными. Требуется
 произвести дополнительные настройки:


	- для формы ввода как объекта репозитория, описываемого интерфейсом
	 [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm),
	 [создать
	 параметры](../IMetabaseObjectParams/IMetabaseObjectParams.Add.htm) и настроить связь с глобальными переменными;


	- такие же параметры и настройки связи с глобальными переменными
	 произвести для [отчёта](DataEntryFormsCore.chm::/Interface/IDataEntryForm/IDataEntryForm.Report.htm),
	 связанного с формой ввода.


## Пример


Для выполнения примера в настройках репозитория должна быть создана
 пользовательская глобальная переменная с идентификатором GLOBAL_INT. Также
 в репозитории предполагается наличие объекта с идентификатором REPORT,
 для которого создан параметр ITEM. Глобальная переменная и параметр объекта
 имеют одинаковый тип данных.


Добавьте ссылки на системные сборки: Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    MObj: IMetabaseObject;

    Param: IMetabaseObjectParam;

    ParamLink: IMetabaseObjectParamLink;

    ParamValues: IMetabaseObjectParamValues;

    ParamValue: IMetabaseObjectParamValue;

Begin

    Mb := MetabaseClass.Active;

    MObj := Mb.ItemById("REPORT").Edit;

    // Получение настроек параметра

    Param := MObj.Params.FindById("ITEM");

    // Настройка связи с глобальной переменной

    ParamLink := Param.SharedParamLink;

    ParamLink.ParamId := "GLOBAL_INT";

    ParamLink.ReadWriteMode := MetabaseObjectParamReadWriteMode.ReadWrite;

    // Сохранение объекта

    MObj.Save;

    // Создадим значения для параметров

    ParamValues := MObj.Params.CreateEmptyValues;

    ParamValue := ParamValues.FindById("ITEM");

    Debug.WriteLine("Значение по умолчанию для параметра: " + ParamValue.Value);

    Debug.WriteLine("Значение глобальной переменной до изменения параметра: " + Mb.Cache.SharedValue("GLOBAL_INT") As String);

    // Изменение параметра

    ParamValue.Value := 1000;

    Debug.WriteLine("Значение глобальной переменной после изменения параметра: " + Mb.Cache.SharedValue("GLOBAL_INT") As String);

End Sub UserProc;


При выполнении примера для параметра объекта будет настроена связь с
 глобальной переменной. Будет произведена инициализация значений параметров
 и в консоль среды разработки будут выведены значения параметра и глобальной
 переменной. После этого будет изменено значение параметра и в консоль
 выведено обновлённое значение глобальной переменной.


См. также:


[IMetabaseObjectParam](IMetabaseObjectParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
