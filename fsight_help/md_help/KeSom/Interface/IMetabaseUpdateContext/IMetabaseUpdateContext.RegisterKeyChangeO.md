# IMetabaseUpdateContext.RegisterKeyChangeO

IMetabaseUpdateContext.RegisterKeyChangeO
-


# IMetabaseUpdateContext.RegisterKeyChangeO


## Синтаксис


RegisterKeyChangeO(OwnObject: Integer; ClassId:
 Integer; oldKey: Integer; newKey: Integer; oldId: String; newId: String;
 Object: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm));


## Параметры


OwnObject. Владелец объекта,
 ключ которого переопределяется;


ClassId. Идентификатор класса
 объекта репозитория-приёмника, на который ссылается объект обновления;


oldKey. Ключ объекта репозитория-источника,
 на который ссылается объект до обновления;


newKey. Ключ объекта репозитория-приёмника,
 на который ссылается объект после обновления;


oldId. Идентификатор объекта
 репозитория-источника, на который ссылается объект до обновления;


newId. Идентификатор объекта
 репозитория-приёмника, на который ссылается объект после обновления;


Object. Объект репозитория-приёмника,
 на который ссылается объект после обновления.


## Описание


Метод RegisterKeyChangeO переопределяет
 ключ объекта репозитория, на который ссылается объект обновления, с учетом
 владельца.


## Комментарии


В качестве значения параметра ClassId
 указывается одно из допустимых значений перечисления [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие табличных
 справочников НСИ с идентификаторами «MDM_HIE_INDICATOR_S», «MDM_HIE_INDICATOR_D»
 и «MDM_INDICATOR_D». Справочник «MDM_INDICATOR_D» должен быть родительским
 по отношению к справочнику «MDM_HIE_INDICATOR_D».


В файловой системе предполагается наличие файла обновления «C:\CustomObj.pefx»,
 предназначенного для обновления объекта пользовательского класса, который
 зависит от справочника «MDM_HIE_INDICATOR_D» и его родителя.


Добавьте ссылку на системную сборку Metabase.


	Sub UserUpd;

	Var

	    Mb: IMetabase;

	    Update: IMetabaseUpdate;

	    Context: IMetabaseUpdateContext;

	    NewObj, OldObj: IMetabaseObject;

	    Progress: MyUpdateProgress;

	Begin

	    // Получаем текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Создаем обновление

	    Update := Mb.CreateUpdate;

	    // Загружаем параметры обновления из файла

	    Update.LoadFromFileNF("C:\CustomObj.pefx");

	    // Получаем справочники

	    NewObj := Mb.ItemById("MDM_HIE_INDICATOR_S").Bind;

	    OldObj := Mb.ItemById("MDM_HIE_INDICATOR_D").Bind;

	    // Создаем дополнительные настройки обновления

	    Context := Update.CreateUpdateContext;

	    // Переопределяем справочник, от которого зависит пользовательский объект в обновлении

	    Context.RegisterKeyChangeO(Mb.ItemById("MDM_INDICATOR_D").key, MetabaseObjectClass.KE_CLASS_METADICTIONARYRDS,

	        OldObj.key, NewObj.key, OldObj.Id, NewObj.Id, NewObj);

	    // Создаем объект, реализующий события, которые происходят во время обновления

	    Progress := New MyUpdateProgress.Create;

	    // Выполняем обновление

	    Update.ApplyEx(Progress, Context);

	End Sub UserUpd;


	// Класс, реализующий события, которые происходят во время обновления

	Class MyUpdateProgress: UpdateProgress

	    // Событие, возникающее при наличии дополнительных настроек обновления

	    Sub OnContext(Context: IMetabaseUpdateContext);

	    Var

	        i, j: Integer;

	        KeyMap: IMetabaseUpdateKeyMap;

	        UpdRemaps: IMetabaseUpdateRemappings;

	        UpdObjRemap: IMetabaseUpdateObjectRemapping;

	        UpdRemap: IMetabaseUpdateRemapping;

	    Begin

	        // Получаем карту ключей, используемых для повторного сопоставления объектов обновления

	        KeyMap := Context.KeyMap;

	        // Проверяем, не пустая ли карта

	        If Not KeyMap.IsEmpty Then

	            // Если карта содержит данные, то перебираем её элементы

	            For j := 0 To KeyMap.Count - 1 Do

	                UpdObjRemap := KeyMap.Item(j);

	                // Получаем коллекцию параметров повторного сопоставления для объектов репозитория

	                UpdRemaps := UpdObjRemap.Map(MetabaseUpdateRemappingType.Object);

	                // Проверяем, содержит ли коллекция элементы

	                If Not UpdRemaps.IsEmpty Then

	                    // Если коллекция содержит данные, то перебираем её элементы

	                    For i := 0 To UpdRemaps.Count - 1 Do

	                        UpdRemap := UpdRemaps.Item(i);

	                        // Выводим информацию о параметрах повторного сопоставления объекта

	                        Debug.WriteLine("Идентификатор нового объекта: " + UpdRemap.NewId);

	                        Debug.WriteLine("Идентификатор старого объекта: " + UpdRemap.OldId);

	                        Debug.WriteLine("Ключ нового объекта: " + UpdRemap.NewKey.ToString);

	                        Debug.WriteLine("Ключ старого объекта: " + UpdRemap.OldKey.ToString);

	                        Debug.WriteLine("");

	                    End For;

	                End If;

	            End For;

	        End If;

	    End Sub OnContext;

	End Class MyUpdateProgress;


В результате выполнения примера будет обновлён пользовательский объект:
 теперь он будет зависеть от справочника «MDM_HIE_INDICATOR_S». Во время
 обновления будет обработано событие, возникающее при наличии дополнительных
 настроек обновления. В окно консоли будет выведена информация о повторном
 сопоставлении объектов, выполненном при обновлении.


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
