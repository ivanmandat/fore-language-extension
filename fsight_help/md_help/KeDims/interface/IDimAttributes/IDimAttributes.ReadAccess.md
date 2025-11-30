# IDimAttributes.ReadAccess

IDimAttributes.ReadAccess
-


# IDimAttributes.ReadAccess


## Синтаксис


ReadAccess: [IDimAttribute](../IDimAttribute/IDimAttribute.htm);


## Описание


Свойство ReadAccess возвращает
 объект, содержащий атрибут справочника, ограничивающий права на чтение
 записей.


## Комментарии


Если ограничение на чтение не установлено, то свойство возвращает значение
 Null. При установленном ограничении
 на чтение будут считываться только те записи, для которых значение атрибута
 соответствует 32-х битной маске безопасности.


## Пример


Для выполнения примера предполагается наличие объекта репозитория с
 идентификатором «D_TO».


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    DimModel: IDimensionModel;

    DimAttrs: IDimAttributes;

    DimAttr: IDimAttribute;

    i: Integer;

Begin

    MB:=MetabaseClass.Active;

    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

    DimAttrs:=DimModel.Attributes;

    DimAttr:=DimAttrs.ReadAccess;

    If DimAttr<>Null Then

        i:=DimAttr.Key;

        Debug.WriteLine(i);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен ключ атрибута,
 ограничивающего права на чтение записей справочника, если он установлен.


См. также:


[IDimAttributes](IDimAttributes.htm) | [ISecurityLabels](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
