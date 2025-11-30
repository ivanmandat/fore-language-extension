# IMetabasePolicy.MethodsCombineAlgorithm

IMetabasePolicy.MethodsCombineAlgorithm
-


# IMetabasePolicy.MethodsCombineAlgorithm


## Синтаксис


MethodsCombineAlgorithm:
 [ControlMethodsCombineAlgorithm](../../Enums/ControlMethodsCombineAlgorithm.htm);


## Описание


Свойство MethodsCombineAlgorithm
 определяет [алгоритм
 комбинации прав](Admin.chm::/04_SecurityPolicy/Admin_SecPolicy.htm#access_control) по атрибутному и дискреционному методу
 разграничения доступа.


## Комментарии


Данное свойство актуально при одновременном использовании [атрибутного](Admin.chm::/04_SecurityPolicy/Admin_ABAC.htm)
 и [дискреционного](Admin.chm::/04_SecurityPolicy/Admin_PermSep_D.htm)
 метода разграничения доступа.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Активируем использование дискреционного и атрибутного доступа

    MS.Policy.DiscretionaryAccessControl := True;

    MS.Policy.AttributeBasedAccessControl := True;

    // Установим алгоритм комбинации «OR»

    MS.Policy.MethodsCombineAlgorithm := ControlMethodsCombineAlgorithm.Permit;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет активировано использование дискреционного
 и атрибутного метода разграничения доступа, и установлен алгоритм комбинации
 прав «OR».


При установленном алгоритме комбинации:


	- если настроено разрешение операции хотя бы по одному из методов
	 разграничения доступа, а по другому права доступа не определены, то
	 результатом будет разрешение операции;


	- если по одному из методов разграничения доступа операция запрещена,
	 то результатом будет запрет операции.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
