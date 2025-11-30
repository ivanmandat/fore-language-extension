# ICertificate.SetData

ICertificate.SetData
-


# ICertificate.SetData


## Синтаксис


SetData(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, из которого
 будет загружен сертификат.


## Описание


Метод SetData загружает содержимое
 в текущий сертификат из указанного потока.


## Комментарии


Метод используется при создании нового или обновлении существующего
 сертификата. Поток может быть связан с файлом или любым другим местом,
 в котором хранится pem-сертификат.


## Пример


Пример использования приведен в описании метода [ICertificates.Add](../ICertificates/ICertificates.Add.htm).


См. также:


[ICertificate](ICertificate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
