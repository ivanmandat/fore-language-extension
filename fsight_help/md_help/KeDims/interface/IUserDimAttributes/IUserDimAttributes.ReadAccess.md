# IUserDimAttributes.ReadAccess

IUserDimAttributes.ReadAccess
-


# IUserDimAttributes.ReadAccess


## Синтаксис


ReadAccess: [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Описание


Свойство ReadAccess определяет
 атрибут справочника, ограничивающий права на чтение записей.


## Комментарии


Если ограничение на чтение не установлено, то свойство возвращает значение
 Null. При установленном ограничении
 на чтение будут считываться только те записи, для которых значение атрибута
 соответствует 32-х битной маске безопасности.


## Пример


Для выполнения примера предполагается наличие вычисляемого справочника
 с идентификатором «USER_DIM».


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    UsDim: IUserDimension;

    UsDimAts: IUserDimAttributes;

    UsDimAttr: IUserDimAttribute;

    i: Integer;

Begin

    MB:=MetabaseClass.Active;

    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

    UsDimAts:=UsDim.Attributes;

    UsDimAttr:=UsDimAts.ReadAccess;

    If UsDimAttr<>Null Then

        i:=UsDimAttr.Key;

        Debug.WriteLine(i);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен ключ атрибута,
 ограничивающего права на чтение записей вычисляемого справочника, если
 он установлен.


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)
 | [ISecurityLabels](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
