# IStandardDimAttributes.ReadAccess

IStandardDimAttributes.ReadAccess
-


# IStandardDimAttributes.ReadAccess


## Синтаксис


ReadAccess: [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Описание


Свойство ReadAccess определяет
 атрибут табличного справочника, ограничивающий права на чтение записей.


## Комментарии


Если ограничение на чтение не установлено, то свойство возвращает значение
 Null. При установленном ограничении
 на чтение будут считываться только те записи, для которых значение атрибута
 соответствует 32-х битной маске безопасности.


## Пример


Для выполнения примера предполагается наличие табличного справочника
 с идентификатором «TAB_DIM».


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    Dimens: IStandardDimension;

    DimAtrrs: IStandardDimAttributes;

    DimAtribut: IStandardDimAttribute;

    i: Integer;

Begin

    MB:=MetabaseClass.Active;

    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

    DimAtrrs:=Dimens.Attributes;

    DimAtribut:=DimAtrrs.ReadAccess;

    If DimAtribut<>Null Then

        i:=DimAtribut.Key;

        Debug.WriteLine(i);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен ключ атрибута,
 ограничивающего права на чтение записей табличного справочника, если он
 установлен.


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)
 | [ISecurityLabels](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
