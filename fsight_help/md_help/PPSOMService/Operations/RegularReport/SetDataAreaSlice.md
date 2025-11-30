# SetDataAreaSlice: Операция

SetDataAreaSlice: Операция
-


**


# SetDataAreaSlice


## Синтаксис


bool SetDataAreaSlice(string mon, DataAreaSlice
 tArg)


## Параметры


mon. Моникёр
 для работы со срезом аналитической области данных.


tArg. Настройки среза, которые
 необходимо задать.


## Описание


Операция SetDataAreaSlice изменяет
 настройки среза аналитической области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «DataArea!DataSources!ключ
 источника!DataSourceSlices!ключ среза» для работы с настройками
 среза, а в поле tArg задайте
 необходимые настройки среза. Моникёр может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек среза завершилось успешно.


## Пример


Ниже приведён пример переименования среза данных. В запросе передаётся
 моникёр среза аналитической области данных и новое наименование. В ответе
 возвращается признак успешного переименования среза.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDataAreaSlice xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">MFMABINKFPPDGOAEOBOOGFNHBKBGDINECKCPBCDFBECFODJM!M!S!PJGOCAMNKFPPDGOAEBKLCKKHMBCAFDKDEMLAJMEJFLDNGLJMJ!DataArea!DataSources!1!DataSourceSlices!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>1</k>  <n>Расчёт расходов</n>  </tArg>
  </SetDataAreaSlice>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDataAreaSliceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDataAreaSliceResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDataAreaSlice" :
  {
   "mon" : "MFMABINKFPPDGOAEOBOOGFNHBKBGDINECKCPBCDFBECFODJM!M!S!PJGOCAMNKFPPDGOAEBKLCKKHMBCAFDKDEMLAJMEJFLDNGLJMJ!DataArea!DataSources!1!DataSourceSlices!1",
   "tArg" :
    {
     "k" : "1",
     "n" : "Расчёт расходов"
    }
  }
}

### JSON-ответ:


{
 "SetDataAreaSliceResult" : "1"
}


public static bool SetDataAreaSlice(string moniker, uint sourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDataAreaSlice()
    {
        tArg = new DataAreaSlice()
        {
            k = sliceKey,
            n = "Расчёт расходов"
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey + "!DataSourceSlices!" + sliceKey
    };
    // Изменение настроек среза аналитической области данных
    var result = somClient.SetDataAreaSlice(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
