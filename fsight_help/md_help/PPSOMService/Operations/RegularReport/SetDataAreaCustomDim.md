# SetDataAreaCustomDim: Операция

SetDataAreaCustomDim: Операция
-


**


# SetDataAreaCustomDim


## Синтаксис


bool SetDataAreaCustomDim(string mon, DataAreaSliceCustomDim
 tArg)


## Параметры


mon. Моникёр
 для работы с аналитической областью данных регламентного отчёта.


tArg. Настройки пользовательской
 иерархии, которые необходимо применить.


## Описание


Операция SetDataAreaCustomDim
 изменяет пользовательскую иерархию у измерения среза аналитической области
 данных.


## Комментарии


Операция позволяет изменить структуру пользовательской иерархии, которая
 будет отображаться вместо исходного измерения. Для выполнения операции
 укажите в поле mon моникёр экземпляра
 регламентного отчёта с постфиксом «!DataArea»
 для работы с аналитической областью данных, а в поле tArg
 настройки пользовательской иерархии, которая заменит исходное измерение.
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение пользовательской иерархии завершилось успешно.


## Пример


Ниже приведён пример перемещения элемента в пользовательской иерархии.
 В запросе передаётся моникёр для работы с аналитической областью данных,
 ключ среза, измерения и параметры перемещения элемента. В ответе возвращается
 признак успешного перемещения.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDataAreaCustomDim xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CKBLCOMLGNPDGOAEOLMBENEEMJJPNLBEEJELMKJMFJMDPPKA!M!S!PJFDFHPMLGNPDGOAEIIKFLFJDIJHOCIHEOIELENPBPJCMFKEE!DataArea</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <sliceKey>1</sliceKey>  <operation>Down</operation>[![](../../minus.gif)](../../#)<dim>
[![](../../minus.gif)](../../#)<elems>
[![](../../minus.gif)](../../#)<Item>
[![](../../minus.gif)](../../#)<arg>
  <valueId>4</valueId>  <otherId>2</otherId>  </arg>
  </Item>
  </elems>
  <key>116</key>  </dim>
  </tArg>
  </SetDataAreaCustomDim>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDataAreaCustomDimResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDataAreaCustomDimResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDataAreaCustomDim" :
  {
   "mon" : "CKBLCOMLGNPDGOAEOLMBENEEMJJPNLBEEJELMKJMFJMDPPKA!M!S!PJFDFHPMLGNPDGOAEIIKFLFJDIJHOCIHEOIELENPBPJCMFKEE!DataArea",
   "tArg" :
    {
     "sliceKey" : "1",
     "operation" : "Down",
     "dim" :
      {
       "elems" :
        {
         "Item" :
          {
           "arg" :
            {
             "valueId" : "4",
             "otherId" : "2"
            }
          }
        },
       "key" : "116"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDataAreaCustomDimResult" : "1"
}


public static bool SetDataAreaCustomDim(string moniker, uint sliceKey, uint dimKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDataAreaCustomDim()
    {
        tArg = new DataAreaSliceCustomDim()
        {
            sliceKey = sliceKey,
            operation = CDOp.Down,
            dim = new CustomDimension()
            {
                key = dimKey,
                elems = new CDElement[]
                {
                    new CDElement()
                    {
                        arg = new CDActionArg()
                        {
                            otherId = "2",
                            valueId = "4"
                        }
                    }
                }
            }
        },
        mon = moniker + "!DataArea"
    };
    // Перемещение элемента в пользовательской иерархии
    var result = somClient.SetDataAreaCustomDim(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
