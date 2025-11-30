# Настройка прав доступа к элементам справочника

Настройка прав доступа к элементам справочника
-


# Настройка прав доступа к элементам справочника


При использовании [табличных](../../interface/IStandardDimension/IStandardDimension.htm) или [вычисляемых](../../interface/IUserDimension/IUserDimension.htm) справочников в кубах, либо других объектах репозитория, есть возможность ограничить права на чтение или запись данных, по определенным элементам. Для этого в справочнике необходимо настроить метки безопасности и указать атрибуты прав доступа, по значениям которых будет определяться возможность чтения и изменения данных определенным пользователем репозитория. Рассмотрим каждый этап настройки отдельно.


## Настройка меток безопасности


Для работы с метками безопасности справочников предназначен интерфейс [ISecurityLabels](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.htm). Параметры меток безопасности можно получить используя свойство [ISecurityDescriptor.LabelSecurity](KeSom.chm::/Interface/ISecurityDescriptor/ISecurityDescriptor.LabelSecurity.htm). Метки безопасности организуют битовую маску безопасности, в соответствии с которой будет разрешен/запрещен доступ на чтение или изменение данных по определенным элементам. В битовой маске каждому биту сопоставлен определенный субъект безопасности. По умолчанию в маске первые два бита сопоставлены администратору репозитория и группе администраторов соответственно. При необходимости в данных битах можно изменить сопоставление.


	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    SecLab: ISecurityLabels;

	    Bit: Integer;

	Begin

	    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("Dim_1");

    //Дескриптор безопасности справочника
    SecDesc := MDesc.SecurityDescriptor;

	    SecDesc.Edit;

    //Метки безопасности справочника
    SecLab := SecDesc.LabelSecurity;

    //Определение бита маски безопасности, не сопоставленного
    //ни с одним субъектом безопасности
    //Предполагается, что все следующие биты также не сопоставлены
    //ни с одним субъектом безопасности
    For Bit := 0 To SecLab.BitCount - 1 Do

        If SecLab.Mapping(Bit) = Null Then

            Break;

        End If;

    End For;

	    Debug.WriteLine(Bit);

    //Сопоставление субъектов безопасности свободным битам маски доступа
    SecLab.Mapping(Bit) := MB.Security.ResolveName("TESTUSER1");

    SecLab.Mapping(Bit + 1) := MB.Security.ResolveName("TESTUSER2");

	    SecDesc.Apply(False);


В данном примере будут получены параметры меток безопасности справочника. Будет определен первый свободный бит маски. Данному биту и биту, следующему за ним, будут сопоставлены два субъекта безопасности: «TESTUSER1» и «TESTUSER2». Данные субъекты должны быть созданы в менеджере безопасности.


## Настройка атрибутов прав доступа


После настроек меток безопасности можно приступить к настройке атрибутов справочника. Для разграничения прав в справочниках предназначены атрибуты с назначением [Доступ на чтение](../../interface/IDimAttributes/IDimAttributes.ReadAccess.htm) и [Доступ на запись](../../interface/IDimAttributes/IDimAttributes.WriteAccess.htm). Если разграничение прав осуществляется не более чем для 32 субъектов безопасности, то в качестве данных атрибутов должны использоваться атрибуты, имеющие целый тип данных, иначе атрибуты со строковым типом данных. Для указания данных атрибутов в справочниках используются следующие свойства: В табличном справочнике: свойства [IStandardDimAttributes.ReadAccess](../../interface/IStandardDimAttributes/IStandardDimAttributes.ReadAccess.htm) и [IStandardDimAttributes.WriteAccess](../../interface/IStandardDimAttributes/IStandardDimAttributes.WriteAccess.htm); В вычисляемом справочнике: [IUserDimAttributes.ReadAccess](../../interface/IUserDimAttributes/IUserDimAttributes.ReadAccess.htm) и [IUserDimAttributes.WriteAccess](../../interface/IUserDimAttributes/IUserDimAttributes.WriteAccess.htm)). Данные атрибуты должны быть связаны с соответствующими полями источника данных.


	Var

	    MB: IMetabase;

	    StdDim: IStandardDimension;

	    StdAttrs: IStandardDimAttributes;

	    StdAttr: IStandardDimAttribute;

	    DimBlock: IStandardDimBlock;

	    DataSet: IDatasetModel;

	    DataSetId: String;

	Begin

	    MB := MetabaseClass.Active;

    StdDim := MB.ItemById("Dim_1").Edit As IStandardDimension;

	    StdAttrs := StdDim.Attributes;

    //Создание атрибута, ограничивающего права на чтение
    StdAttr := StdAttrs.Add;

	    StdAttr.DataType := DbDataType.Integer;

    StdAttr.Id := "READ_ACCESS";

    StdAttr.Name := "Права на чтение";

	    StdAttrs.ReadAccess := StdAttr;

    //Создание атрибута, ограничивающего права на запись
    StdAttr := StdAttrs.Add;

	    StdAttr.DataType := DbDataType.Integer;

    StdAttr.Id := "WRITE_ACCESS";

    StdAttr.Name := "Права на запись";

	    StdAttrs.WriteAccess := StdAttr;

    //Привязка атрибутов к полям источника данных в первом блоке справочника
    //Получаем параметры блока
    DimBlock := StdDim.Blocks.Item(0);

    //Получаем параметры источника данных
    //В источнике данных предполагается наличие полей с идентификаторами
    //READ_ACCESS и WRITE_ACCESS
    DataSet := DimBlock.Dataset;

    DataSetId := (DataSet As IMetabaseObject).Id;

    //Привязка атрибутов справочника к полям источника данных
    DimBlock.Binding(StdAttrs.ReadAccess).AsString := DataSetId + ".READ_ACCESS";

    DimBlock.Binding(StdAttrs.WriteAccess).AsString := DataSetId + ".WRITE_ACCESS";

	    (StdDim As IMetabaseObject).Save;


Для того чтобы разграничение прав вступило в силу остается в источнике данных справочника указать значения маски доступа в соответствующих полях. Получить значение маски можно используя свойство [ISecurityLabels.Value](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.Value.htm) (если разграничение прав не более чем для 32 субъектов безопасности) или [ISecurityLabels.ValueStr](KeSom.chm::/Interface/ISecurityLabels/ISecurityLabels.ValueStr.htm).


Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    Sec: IMetabaseSecurity;

    SecDesc: ISecurityDescriptor;

    SecLab: ISecurityLabels;

Begin

    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("Dim_1");

    Sec := MB.Security;

    SecDesc := MDesc.SecurityDescriptor;

    SecLab := SecDesc.LabelSecurity;

    Debug.WriteLine(SecLab.Value(Sec.ResolveName("TESTUSER1")));

    Debug.WriteLine(SecLab.Value(Sec.ResolveName("TESTUSER2")));


Если необходимо, чтобы права были у нескольких пользователей, то в качестве значения задается сумма значений свойства для каждого пользователя. Для проверки наличия прав в коллекции элементов реализованы свойства [IDimElements.ReadAccess](../../interface/IDimElements/IDimElements.ReadAccess.htm) и [IDimElements.WriteAccess](../../interface/IDimElements/IDimElements.WriteAccess.htm).


См. также:


[Введение](../KeDims_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
