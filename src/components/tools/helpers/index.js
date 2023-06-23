export const formatMoney = (value) => {   
    return `Rs ${Intl.NumberFormat().format(value)}`;
};