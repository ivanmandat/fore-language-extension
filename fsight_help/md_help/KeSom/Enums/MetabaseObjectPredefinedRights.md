# MetabaseObjectPredefinedRights

MetabaseObjectPredefinedRights
-


# MetabaseObjectPredefinedRights


## Описание


Перечисление MetabaseObjectPredefinedRights
 содержит список операций, на которые могут раздаваться права пользователям
 и вестись аудит доступа.


Используется следующими свойствами и методами:


	- [IMetabaseObjectDescriptor.HasAccess](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.HasAccess.htm);


	- [IMetabaseObjectDescriptor.CheckAndAudit](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAudit.htm);


	- [IMetabaseObjectDescriptor.CheckAndAuditLabel](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAuditLabel.htm);


	- [IMetabaseObjectDescriptor.GetDeniedAccess](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.GetDeniedAccess.htm);


	- [IMetabaseUser.HasAccess](../Interface/IMetabaseUser/IMetabaseUser.HasAccess.htm);


	- [ISecurityDescriptor.HasAccess](../Interface/ISecurityDescriptor/ISecurityDescriptor.HasAccess.htm);


	- [ISecurityDescriptor.HasAccessAudit](../Interface/ISecurityDescriptor/ISecurityDescriptor.HasAccessAudit.htm);


	- [ISecurityDescriptor.HasAccessAuditLabel](../Interface/ISecurityDescriptor/ISecurityDescriptor.HasAccessAuditLabel.htm);


	- [ISecurityDescriptor.GetDeniedAccess](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetDeniedAccess.htm);


	- [ISecurityDescriptor.GetEffectiveRights](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetEffectiveRights.htm);


	- [ISecurityDescriptor.GetEffectiveRightsAudit](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetEffectiveRightsAudit.htm);


	- [ISecurityDescriptor.GetEffectiveRightsAuditLabel](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetEffectiveRightsAuditLabel.htm);


	- [IAccessControlList.AddAce](../Interface/IAccessControlList/IAccessControlList.AddAce.htm);


	- [IAccessControlEntry.AccessMask](../Interface/IAccessControlEntry/IAccessControlEntry.AccessMask.htm);


	- [IMetabaseAuditPolicy.FilterClass](../Interface/IMetabaseAuditPolicy/IMetabaseAuditPolicy.FilterClass.htm);


	- [IMetabaseAuditPolicy.TrackClassHistory](../Interface/IMetabaseAuditPolicy/IMetabaseAuditPolicy.TrackClassHistory.htm);


	- [IAuditFilterCondition.Operation](../Interface/IAuditFilterCondition/IAuditFilterCondition.Operation.htm);


	- [IRubricatorFactor.GetEffectiveRights](KeCubes.chm::/Interface/IRubricatorFactor/IRubricatorFactor.GetEffectiveRights.htm);


	- [IRubricatorSegment.GetEffectiveRights](KeCubes.chm::/Interface/IRubricatorSegment/IRubricatorSegment.GetEffectiveRights.htm);


	- [IRubricatorSegmentsSet.GetEffectiveRights](KeCubes.chm::/Interface/IRubricatorSegmentsSet/IRubricatorSegmentsSet.GetEffectiveRights.htm);


	- [IRubricatorFactor.GetSubjectEffectiveRights](KeCubes.chm::/Interface/IRubricatorFactor/IRubricatorFactor.GetSubjectEffectiveRights.htm);


	- [IRubricatorSegment.GetSubjectEffectiveRights](KeCubes.chm::/Interface/IRubricatorSegment/IRubricatorSegment.GetSubjectEffectiveRights.htm);


	- [IRubricatorSegmentsSet.GetSubjectEffectiveRights](KeCubes.chm::/Interface/IRubricatorSegmentsSet/IRubricatorSegmentsSet.GetSubjectEffectiveRights.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 All. Полный доступ.


		 2
		 Read. Чтение данных
		 объекта.

При изменении прав на данное действие автоматически
		 будут изменены права на следующие операции: чтение дескриптора
		 (ReadDescr), чтение параметров
		 (ReadPars), чтение метаданных
		 (ReadBody), а также на
		 дополнительные операции печать (Print),
		 экспорт (ExportData) и
		 специфические операции: извлечение данных, чтение формул, выполнение,
		 чтение элементов справочника, изменение прав на элементы.


		 4
		 Write. Изменение данных
		 объекта.

При изменении прав на данное действие автоматически
		 будут изменены права на следующие операции: изменение дескриптора
		 (WriteDescr), изменение
		 параметров (WritePars),
		 изменение метаданных (WriteBody),
		 создание (Create_), а
		 также на дополнительную операцию импорт (ImportData)
		 и специфические операции, связанные с изменением данных: вставка,
		 удаление, изменение данных, изменение структуры таблицы, сохранение
		 данных и формул, изменение текста процедуры, изменение и добавление
		 элементов справочника, изменение прав на элементы.


		 8
		 Access. Изменение прав
		 доступа к объекту.

При изменении прав на данное действие автоматически
		 будут изменены права на следующие специфические операции: передача
		 прав на данные, изменение прав на элементы.


		 16
		 Delete. Удаление объекта.


При изменении прав на данное действие автоматически
		 будут изменены права на следующие специфические операции: удаление
		 элементов из справочника, изменение прав на элементы.


		 256
		 ReadDescr. Чтение дескриптора
		 (описания) объекта.


		 512
		 WriteDescr. Изменение
		 дескриптора (описания) объекта.


		 1024
		 ReadPars. Чтение параметров
		 объекта.


		 2048
		 WritePars. Изменение
		 параметров объекта.


		 4096
		 ReadBody. Чтение метаданных
		 объекта.


		 8192
		 WriteBody. Изменение
		 метаданных объекта.


		 16384
		 Print. Печать объекта.


		 32768
		 ExportData. Экспорт
		 данных объекта.


		 65536
		 ImportData. Импорт
		 данных объекта.


		 131072
		 Create_. Создание объектов.


## Комментарии


Значения данного перечисления используются при изменении следующих настроек:


	- настройка прав доступа к объекту;


	- настройка аудита доступа к объекту;


	- настройка аудита доступа по классам объектов;


	- настройка ведения истории по классам объектов.


Общие
 операции можно производить со всеми объектами репозитория. Операции
 Print, ExportData
 и ImportData являются дополнительными
 и доступны объектам, для которых есть возможность осуществить печать,
 экспорт или импорт данных. Также различным классам объектов могут быть
 доступны специфические операции,
 представленные в перечислениях:


	- [AuditLogSpecificRights](AuditLogSpecificRights.htm);


	- [CalculatedCubeSpecificRights](CalculatedCubeSpecificRights.htm);


	- [CubeLoaderSpecificRights](CubeLoaderSpecificRights.htm);


	- [CubeSpecificRights](CubeSpecificRights.htm);


	- [CustomObjectSpecificRights](CustomObjectSpecificRights.htm);


	- [DataBaseSpecificRights](DataBaseSpecificRights.htm);


	- [DictionarySpecificRights](DictionarySpecificRights.htm);


	- [MDCalcSpecificRights](MDCalcSpecificRights.htm);


	- [ProblemSpecificRights](ProblemSpecificRights.htm);


	- [ProcedureSpecificRights](ProcedureSpecificRights.htm);


	- [ScenarioDimensionSpecificRights](ScenarioDimensionSpecificRights.htm);


	- [ScheduledTaskSpecificRights](ScheduledTaskSpecificRights.htm);


	- [SecuritySpecificRights](SecuritySpecificRights.htm);


	- [TableSpecificRights](TableSpecificRights.htm);


	- [UpdateObjectSpecificRights](UpdateObjectSpecificRights.htm);


	- [ValidationSpecificRights](ValidationSpecificRights.htm).


Дополнительные и специфические
 операции, доступные для различных видов объектов, представлены
 в разделе «[Классы
 объектов](Admin.chm::/04_SecurityPolicy/Admin_Object_Classes.htm)».


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
