# IDimensionModel.AbacSecured

IDimensionModel.AbacSecured
-


# IDimensionModel.AbacSecured


## Синтаксис


AbacSecured: Boolean;


## Описание


Свойство AbacSecured возвращает
 признак наличия [атрибутных
 прав доступа](Admin.chm::/04_SecurityPolicy/Admin_ABAC.htm) у элементов справочника НСИ.


## Комментарии


Если выбран [атрибутный
 метод разграничения доступа](Admin.chm::/04_SecurityPolicy/Admin_ABAC.htm), то для каждого элемента
 справочника НСИ можно настроить права доступа.


Для получения подробной информации обратитесь к разделу «[Права доступа
 на элементы справочников НСИ](Admin.chm::/03_Admin/Admin_ElementAccess.htm#abac)».


Допустимые значения:


	- True. Элементы справочника
	 НСИ имеют атрибутные права доступа;


	- False. Элементы справочника
	 НСИ не имеют атрибутные права доступа.


## Пример


Для выполнения примера убедитесь, что в репозитории содержится справочник
 НСИ с идентификатором RDS_DICT.


Добавьте ссылки на системные сборки: Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IDimensionModel;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим справочник НСИ

    MObj := MB.ItemById("RDS_DICT").Bind;

    Dict := MObj As IDimensionModel;

    // Определим, имеют ли элементы справочника атрибутные права доступа

    If Dict.AbacSecured Then

        Debug.WriteLine("Элементы имеют атрибутные права доступа");

    Else

        Debug.WriteLine("Элементы не имеют атрибутные права доступа");

    End If;

End Sub UserProc;


После выполнения примера в консоль будет выведен результат определения
 атрибутных прав доступа на элементы справочника НСИ.


См. также:


[IDimensionModel](IDimensionModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
