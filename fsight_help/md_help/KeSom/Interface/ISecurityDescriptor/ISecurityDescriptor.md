# ISecurityDescriptor

ISecurityDescriptor
-


# ISecurityDescriptor


## Описание


Интерфейс ISecurityDescriptor
 содержит свойства и методы описания безопасности объекта или типа объектов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AccessSecured](ISecurityDescriptor.AccessSecured.htm)
		 Свойство AccessSecured
		 возвращает признак использования прав доступа для элементов справочника
		 НСИ.


		 ![](../../Property_Image.gif)
		 [AccessToken](ISecurityDescriptor.AccessToken.htm)
		 Свойство AccessToken
		 возвращает объект, содержащий мандатный контроль доступа к объекту.


		 ![](../../Property_Image.gif)
		 [Acl](ISecurityDescriptor.Acl.htm)
		 Свойство Acl возвращает
		 объект, содержащий дополнительные параметры безопасности объекта.


		 ![](../../Property_Image.gif)
		 [Flags](ISecurityDescriptor.Flags.htm)
		 Свойство Flags определяет
		 признак наследования прав доступа от родительского объекта.


		 ![](../../Property_Image.gif)
		 [HasAccessMandatory](ISecurityDescriptor.HasAccessMandatory.htm)
		 Свойство HasAccessMandatory
		 возвращает признак использования мандатного контроля доступа
		 для элементов справочника НСИ.


		 ![](../../Property_Image.gif)
		 [LabelSecurity](ISecurityDescriptor.LabelSecurity.htm)
		 Свойство LabelSecurity
		 возвращает параметры меток безопасности объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Apply](ISecurityDescriptor.Apply.htm)
		 Метод Apply осуществляет
		 выход из режима редактирования с сохранением всех изменений параметров
		 безопасности объекта.


		 ![](../../Sub_Image.gif)
		 [ApplyO](ISecurityDescriptor.ApplyO.htm)
		 Метод ApplyO осуществляет
		 выход из режима редактирования с сохранением изменений параметров
		 безопасности объекта и определяет, будут ли применяться новые
		 параметры безопасности для внутренних объектов и объектов, для
		 которых установлен признак [отложенной
		 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm).


		 ![](../../Sub_Image.gif)
		 [Edit](ISecurityDescriptor.Edit.htm)
		 Метод Edit открывает
		 на редактирование параметры безопасности объекта.


		 ![](../../Sub_Image.gif)
		 [GetDeniedAccess](ISecurityDescriptor.GetDeniedAccess.htm)
		 Метод GetDeniedAccess
		 для указанного субъекта безопасности проверяет наличие установленных
		 запретов выполнения действий над текущим объектом.


		 ![](../../Sub_Image.gif)
		 [GetEffectiveRights](ISecurityDescriptor.GetEffectiveRights.htm)
		 Метод GetEffectiveRights
		 осуществляет вычисление эффективных прав доступа указанного субъекта
		 безопасности к объекту репозитория.


		 ![](../../Sub_Image.gif)
		 [GetEffectiveRightsAudit](ISecurityDescriptor.GetEffectiveRightsAudit.htm)
		 Метод GetEffectiveRightsAudit
		 осуществляет вычисление эффективных прав доступа и аудита доступа
		 пользователя к объекту репозитория.


		 ![](../../Sub_Image.gif)
		 [GetEffectiveRightsAuditLabel](ISecurityDescriptor.GetEffectiveRightsAuditLabel.htm)
		 Метод GetEffectiveRightsAuditLabel
		 осуществляет вычисление эффективных прав доступа и аудита доступа
		 пользователя, а также параметров метки безопасности, используемой
		 при печати и экспорте объектов репозитория.


		 ![](../../Sub_Image.gif)
		 [HasAccess](ISecurityDescriptor.HasAccess.htm)
		 Метод HasAccess осуществляет
		 проверку и возвращает признак наличия прав у субъекта безопасности
		 произвести указанные действия над текущим объектом.


		 ![](../../Sub_Image.gif)
		 [HasAccessAudit](ISecurityDescriptor.HasAccessAudit.htm)
		 Метод HasAccessAudit
		 осуществляет проверку и возвращает признак наличия прав произвести
		 указанные действия, и признак ведения аудита для указанных действий
		 над объектом.


		 ![](../../Sub_Image.gif)
		 [HasAccessAuditLabel](ISecurityDescriptor.HasAccessAuditLabel.htm)
		 Метод HasAccessAudit
		 осуществляет проверку и возвращает признак наличия прав произвести
		 указанные действия, и признак ведения аудита для указанных действий
		 над объектом, а также вычисляет параметры метки безопасности,
		 используемой при печати и экспорте объектов репозитория.


		 ![](../../Sub_Image.gif)
		 [Revert](ISecurityDescriptor.Revert.htm)
		 Метод Revert осуществляет
		 отмену всех изменений и выход из режима редактирования параметров
		 безопасности объекта.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
