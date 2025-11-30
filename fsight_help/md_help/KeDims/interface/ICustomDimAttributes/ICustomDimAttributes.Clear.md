# ICustomDimAttributes.Clear

ICustomDimAttributes.Clear
-


# ICustomDimAttributes.Clear


## Синтаксис


Clear;


## Описание


Метод Clear удаляет все атрибуты
 из коллекции.


## Комментарии


При удалении всех атрибутов также будут удалены все созданные элементы
 измерения. В случае удаления всех атрибутов для поддержания работоспособности
 справочника должны быть созданы новые атрибуты с назначением: [первичный
 ключ](ICustomDimAttributes.Primary.htm), [идентификатор](ICustomDimAttributes.Id.htm), [наименование](ICustomDimAttributes.Name.htm) и [порядок](ICustomDimAttributes.Order.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «CUBE_CUSTOM». В данном кубе список фактов и их
 иерархия должны определяться локально.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Cube: IStandardCube;

    CustDim: ICustomDimension;

    CustAttrs: ICustomDimAttributes;

    Attr: ICustomDimAttribute;

    Elems: ICustomDimElements;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем стандартный куб

    MObj := MB.ItemById("CUBE_CUSTOM").Edit;

    Cube := MObj As IStandardCube;

    // Получаем измерение фактов куба

    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

    // Получаем коллекцию атрибутов измерения фактов

    CustAttrs := CustDim.Attributes;

    // Очищаем коллекцию атрибутов

    CustAttrs.Clear;

    // Добавляем атрибут «Ключ»

    Attr := CustAttrs.Add;

    Attr.Id := "KEY";

    Attr.Name := "Ключ";

    Attr.DataType := DbDataType.Integer;

    // Добавляем атрибут «Наименование»

    Attr := CustAttrs.Add;

    Attr.Id := "NAME";

    Attr.Name := "Наименование";

    Attr.DataType := DbDataType.String;

    // Добавляем атрибут «Порядок»

    Attr := CustAttrs.Add;

    Attr.Id := "ORDER";

    Attr.Name := "Порядок";

    Attr.DataType := DbDataType.Integer;

    // Добавляем атрибут «Идентификатор»

    Attr := CustAttrs.Add;

    Attr.Id := "ID";

    Attr.Name := "Идентификатор";

    Attr.DataType := DbDataType.String;

    // Добавляем атрибут «Изображение»

    Attr := CustAttrs.Add;

    Attr.Id := "IMAGE";

    Attr.Name := "Изображение";

    Attr.DataType := DbDataType.Integer;

    // Устанавливаем созданные атрибуты

    CustAttrs.Primary := CustAttrs.FindById("KEY");

    CustAttrs.Name := CustAttrs.FindById("NAME");

    CustAttrs.Order := CustAttrs.FindById("ORDER");

    CustAttrs.Id := CustAttrs.FindById("ID");

    CustAttrs.ImageIndex := CustAttrs.FindById("IMAGE");

    // Задаем значения атрибутов

    Elems := CustDim.Elements;

    i := Elems.Add;

    Elems.AttributeValue(i, 0) := 1;

    Elems.AttributeValue(i, 1) := "Значение";

    Elems.AttributeValue(i, 2) := 1;

    Elems.AttributeValue(i, 3) := "VALUE";

    Elems.AttributeValue(i, 4) := 1;

    // Сохраняем изменения

    MObj.Save;

End Sub UserProc;


После выполнения примера будут удалены все атрибуты измерения фактов
 и вместо них созданы новые. Для атрибутов будет установлено необходимое
 назначение. В измерении фактов будет создан новый элемент, для него будут
 заданы значения всех атрибутов.


См. также:


[ICustomDimAttributes](ICustomDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
