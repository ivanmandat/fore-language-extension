# SetTabTableStyle: Операция

SetTabTableStyle: Операция
-


**


# SetTabTableStyle


## Синтаксис


bool SetTabTableStyle(string mon, TabTableStyle
 tArg)


## Параметры


mon. Моникёр
 для работы со стилем оформления табличной области.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetTabTableStyle устанавливает
 и очищает стандартный стиль в табличной области.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр табличной области. Моникёр указывается в следующем формате: «Моникёр экземпляра рег.отчёта!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Views!«ключ таблицы»!EaxTableStyle!TableStyle».


Результатом операции будет логическое значение true,
 если изменение стиля завершилось успешно.


## Пример


Ниже приведён пример установки стандартного стиля для табличной области
 данных. В запросе передаётся моникёр для работы со стилями табличной области
 данных и устанавливаемый стиль. В ответе возвращается признак успешного
 применения стиля.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetTabTableStyle xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HKJBPOFGHFLNFOAEPCMMOLCIPENIILFEJLJPJINGDHAMFJHO!M!S!PKIBJJDGGHFLNFOAELFBDMPPAAHADDJBECIFBLMKKFMCDJAFG!DataArea!DataSources!1!DataSourceSlices!1!Views!1!EaxTableStyle!TableStyle</mon>[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <Name />
  <PredefinedStyle>ExtRedStriped</PredefinedStyle>  </tArg>
  </SetTabTableStyle>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetTabTableStyleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetTabTableStyleResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTabTableStyle" :
  {
   "mon" : "HKJBPOFGHFLNFOAEPCMMOLCIPENIILFEJLJPJINGDHAMFJHO!M!S!PKIBJJDGGHFLNFOAELFBDMPPAAHADDJBECIFBLMKKFMCDJAFG!DataArea!DataSources!1!DataSourceSlices!1!Views!1!EaxTableStyle!TableStyle",
   "tArg" :
    {
     "Name" : "",
     "PredefinedStyle" : "ExtRedStriped"
    }
  }
}

### JSON-ответ:


{
 "SetTabTableStyleResult" : "1"
}


public static bool SetTabTableStyle(string moniker, uint sourceKey, uint sliceKey, uint viewKey, TabTablePredefinedStyle setStyle)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetTabTableStyle()
    {
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString() + "!EaxTableStyle!TableStyle",
        tArg = new TabTableStyle()
        {
            Name = "",
            PredefinedStyle = setStyle
        }
    };
    // Изменение стиля табличной области
    var result = somClient.SetTabTableStyle(tSet);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
