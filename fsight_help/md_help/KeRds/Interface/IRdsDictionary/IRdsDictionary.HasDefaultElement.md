# IRdsDictionary.HasDefaultElement

IRdsDictionary.HasDefaultElement
-


# IRdsDictionary.HasDefaultElement


## Синтаксис


HasDefaultElement: Boolean;


## Описание


Метод HasDefaultElement устанавливает
 наличие элемента по умолчанию в справочнике НСИ.


## Комментарии


Допустимые значения:


	- False. В справочнике
	 не установлен элемент по умолчанию;


	- True. В справочнике
	 установлен элемент по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS_DICT_OBJ, с установленным элементом по
 умолчанию.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Obj: IMetabaseObject;

    Dict: IRdsDictionary;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    Obj := MB.ItemById("RDS_DICT_OBJ").Edit;

    Dict := Obj As IRdsDictionary;

    // Проверим наличие элемента по умолчанию

    Debug.WriteLine(Dict.HasDefaultElement.ToString);

    // Удалим установку
 элемента по умолчанию

    Dict.ResetDefaultElement;

    // Сохраняем справочник

    Obj.Save;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация,
 что в справочнике установлен элемент по умолчанию и будет удалена установка
 элемента.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
