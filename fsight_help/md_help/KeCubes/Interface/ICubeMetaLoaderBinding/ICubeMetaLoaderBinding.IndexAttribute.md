# ICubeMetaLoaderBinding.IndexAttribute

ICubeMetaLoaderBinding.IndexAttribute
-


# ICubeMetaLoaderBinding.IndexAttribute


## Синтаксис


IndexAttribute: String;


## Описание


Свойство IndexAttribute определяет
 идентификатор атрибута, включённого в индекс, по которому осуществляется
 привязка.


## Комментарии


Свойство используется, если в [справочнике](ICubeMetaLoaderBinding.Dimension.htm),
 на который ссылается атрибут базы данных временных рядов, создан индекс
 и в него включены несколько атрибутов. Для привязки этих атрибутов справочника
 необходимо создать соответствующее количество привязок в коллекции [ICubeMetaLoaderBindings](../ICubeMetaLoaderBindings/ICubeMetaLoaderBindings.htm)
 и для каждой привязки задать следующие настройки:


	- указать одинаковый [атрибут](ICubeMetaLoaderBinding.Attribute.htm)
	 базы данных временных рядов, [справочник](ICubeMetaLoaderBinding.Dimension.htm)
	 и [индекс](ICubeMetaLoaderBinding.Index.htm);


	- в свойстве IndexAttribute
	 указать атрибут справочника, входящий в индекс, а в свойстве [Field](ICubeMetaLoaderBinding.Field.htm)
	 (в зависимости от значения свойства [FieldType](ICubeMetaLoaderBinding.FieldType.htm))
	 указать наименование или индекс поля источника, с которым необходимо
	 связать атрибут.


Например, имеется база данных временных рядов, в её структуре создан
 атрибут «HUMAN», который ссылается на справочник репозитория «PEOPLE».
 В структуре справочника создан уникальный индекс «UNIQUEKEY», в который
 включены атрибуты справочника «NAME», «SURNAME» и «BIRTHDAY». В источнике
 имеются поля, наименования которых совпадают с наименованиями атрибутов
 справочника.


Код привязки атрибутов к полям источника будет иметь следующий вид:


			Var

    //...

    TSDB: IRubricator;

    Attr: IMetaAttributes;

    ImportRequestDef: IImportRequestDefinition;

    Params: IImportRequestProviderParams;

    Bindings: ICubeMetaLoaderBindings;

    Binding: ICubeMetaLoaderBinding;

    Dimension: IDimensionModel;

    //...

Begin

    //...

    Attr := TSDB.Facts.Attributes;

    //...

    Params := ImportRequestDef.ProviderParams;

    Bindings := Params.Bindings;

    //...

    //Справочник, на котором построен атрибут

    Dimension := Attr.FindById("PEOPLE").ValuesObject.Bind As IDimensionModel;

    // Задаем привязку атрибута «Имя» (NAME)

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

    Binding.Attribute := "HUMAN";

    Binding.Dimension := Dimension;

    Binding.KeyAttribute := "KEY";

    Binding.Index := "UNIQUEKEY";

    Binding.IndexAttribute := "NAME";

    Binding.FieldType := CubeMetaLoaderFieldType.Name;

    Binding.Field := "NAME";

    // Задаем привязку атрибута «Фамилия» (SURNAME)

    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

    Binding.Attribute := "HUMAN";

    Binding.Dimension := Dimension;

    Binding.KeyAttribute := "KEY";

    Binding.Index := "UNIQUEKEY";

    Binding.IndexAttribute := "SURNAME";

    Binding.FieldType := CubeMetaLoaderFieldType.Name;

    Binding.Field := "SURNAME";

    // Задаем привязку атрибута «День рождения» (BIRTHDAY)

    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

    Binding.Attribute := "HUMAN";

    Binding.Dimension := Dimension;

    Binding.KeyAttribute := "KEY";

    Binding.Index := "UNIQUEKEY";

    Binding.IndexAttribute := "BIRTHDAY";

    Binding.FieldType := CubeMetaLoaderFieldType.Name;

    Binding.Field := "BIRTHDAY";

    //...


Пример создания, настройки и выполнения объекта импорта приведен в описании
 свойства [ICubeMetaLoaderBinding.CalendarDateFormatEx](ICubeMetaLoaderBinding.CalendarDateFormatEx.htm).


См. также:


[ICubeMetaLoaderBinding](ICubeMetaLoaderBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
